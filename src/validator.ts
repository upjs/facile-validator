import * as rules from '@/rules';
import { ValidatorOptions, EventsName, Events, ErrorDetail } from '@/types';
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

    this.eventHandler = function (this: Validator, event: SubmitEvent) {
      event.preventDefault();
      this.handleSubmit();
    }.bind(this);

    if (form === null || !(form instanceof HTMLFormElement)) {
      throw new Error('Form element not found');
    } else {
      this.form = form;
      this.form.addEventListener('submit', this.eventHandler);
    }
  }

  public revoke() {
    this.form.removeEventListener('submit', this.eventHandler);
  }

  public async validate(): Promise<HTMLFormElement> {
    this.events.call('validate:start');
    this.validatorError.clearErrors();

    const fields = this.form.querySelectorAll<HTMLInputElement>('[data-rules]');

    if (fields.length > 0) {
      await this.validateFields(fields);
    }

    if (this.validatorError.hasError) {
      this.events.call('validate:failed');
      this.errorEventTrigger(this.validatorError.errors);
      return Promise.reject(this.validatorError.errors);
    } else {
      this.events.call('validate:success');
      return Promise.resolve(this.form);
    }
  }

  private handleSubmit() {
    return this.validate().then((form) => {
      if (this.options.autoSubmit) {
        form.submit();
      }
    });
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

  public on<K extends EventsName>(event: K, callback: Events[K]): void {
    this.events.on(event, callback);
  }

  public off<K extends EventsName>(event: K, callback: Events[K]): void {
    this.events.off(event, callback);
  }

  private shouldStopOnFirstFailure(givenRules: Array<string>) {
    return givenRules.includes('bail');
  }

  private errorEventTrigger(errors: ErrorDetail[][]) {
    errors.forEach((errors) => {
      if (errors.length === 0) return;

      this.events.call('error:field', errors[0].element, errors);
    });
  }
}

export default Validator;
