import * as rules from '@/rules';
import { ValidatorOptions, EventsName, Events, ErrorDetail, ValidateResponse } from '@/types';
import ValidatorError from '@/modules/validator-error';
import { getValue, toCamelCase } from '@/utils/helpers';
import EventBus from './modules/events';
import Language from './modules/language';

type RuleKey = keyof typeof rules;

const defaultOptions: ValidatorOptions = {
  autoSubmit: true,
};

class Validator {
  private validatorError: ValidatorError;
  private events: EventBus;
  private options: ValidatorOptions;
  private eventHandler: (e: SubmitEvent) => void;
  private form: HTMLFormElement;

  constructor(el: string, options: ValidatorOptions = {}) {
    this.options = Object.assign(defaultOptions, options);
    Language.set(this.options.lang);
    this.validatorError = new ValidatorError();
    this.events = new EventBus(this.options.on);

    const form = document.querySelector(el);
    if (form === null || !(form instanceof HTMLFormElement)) {
      throw new Error('Invalid form element');
    }

    this.eventHandler = async (event: SubmitEvent) => {
      event.preventDefault();
      const { status, form } = await this.validate();
      if (status === 'success' && this.options.autoSubmit) {
        form.submit();
      }
    };
    form.addEventListener('submit', this.eventHandler);
    this.form = form;
  }

  public revoke() {
    this.form.removeEventListener('submit', this.eventHandler);
  }

  public async validate(): Promise<ValidateResponse> {
    this.events.call('validate:start', this.form);
    this.validatorError.clearErrors();

    const fields = this.form.querySelectorAll<HTMLInputElement>('[data-rules]');

    if (fields.length > 0) {
      await this.validateFields(fields);
    }

    let status: ValidateResponse['status'];
    if (this.validatorError.hasError) {
      status = 'failed';
      this.errorEventTrigger(this.validatorError.errors);
    } else {
      status = 'success';
    }

    this.events.call(`validate:${status}`, this.form);
    this.events.call('validate:end', this.form);

    return Promise.resolve({ status, form: this.form });
  }

  public on<K extends EventsName>(event: K, callback: Events[K]): void {
    this.events.on(event, callback);
  }

  public off<K extends EventsName>(event: K, callback: Events[K]): void {
    this.events.off(event, callback);
  }

  private async validateFields(fields: NodeListOf<HTMLInputElement>): Promise<void> {
    return new Promise((resolve) => {
      let processedFields = 0;

      fields.forEach(async (input) => {
        const fieldRules = input.getAttribute('data-rules')?.split('|');

        if (fieldRules && fieldRules.length > 0) {
          const value = await getValue(input);

          for (const fieldRule of fieldRules) {
            // eslint-disable-next-line prefer-const
            let [rule, args = ''] = fieldRule.split(':');
            rule = toCamelCase(rule);

            if (rule in rules) {
              const result = rules[rule as RuleKey](value, args);
              if (result instanceof Error) {
                this.validatorError.setError(input, result);
                if (this.shouldStopOnFirstFailure(fieldRules)) {
                  break;
                }
              }
            }
          }
        }

        if (++processedFields === fields.length) {
          resolve(undefined);
        }
      });
    });
  }

  private shouldStopOnFirstFailure(givenRules: Array<string>) {
    return givenRules.includes('bail');
  }

  private errorEventTrigger(errors: ErrorDetail[][]) {
    errors.forEach((errors) => {
      if (errors.length === 0) return;

      this.events.call('error:field', this.form, errors[0].element, errors);
    });
  }
}

export default Validator;
