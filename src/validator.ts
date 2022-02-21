import * as rules from '@/rules';
import { ValidatorOptions, EventsName, Events, ValidateResponse } from '@/types';
import ValidatorError from '@/modules/validator-error';
import { getValue, toCamelCase } from '@/utils/helpers';
import EventBus from './modules/events';
import Language from './modules/language';
import { RuleError } from './modules/rule-error';
import { replaceRule } from './modules/rule-replacer';

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
    const form = document.querySelector(el);
    if (form === null || !(form instanceof HTMLFormElement)) {
      throw new Error('Invalid form element');
    }

    this.options = Object.assign(defaultOptions, options);
    Language.set(this.options.lang);
    this.validatorError = new ValidatorError();
    this.events = new EventBus(this.options.on);

    // reset errors on validate:start
    this.events.on('validate:start', () => this.validatorError.clearErrors());

    // manage errors on validate:failed
    this.events.on('validate:failed', () => this.errorEventTrigger());

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

    const fields = this.form.querySelectorAll<HTMLInputElement>('[data-rules]');
    if (fields.length > 0) {
      await this.validateFields(fields);
    }

    const status = this.validatorError.hasError ? 'failed' : 'success';
    this.events.call(`validate:${status}`, this.form);
    this.events.call('validate:end', this.form, status);

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

      fields.forEach(async (field) => {
        const fieldRules = field.getAttribute('data-rules')?.split('|');

        if (fieldRules && fieldRules.length > 0) {
          const value = await getValue(field);
          const shouldStopOnFirstFailure = this.shouldStopOnFirstFailure(fieldRules);
          const computedFieldRules = this.getComputedFieldRules(fieldRules);

          for (const fieldRule of computedFieldRules) {
            // eslint-disable-next-line prefer-const
            let [rule, args = ''] = fieldRule.split(':');
            rule = toCamelCase(rule);

            if (rule in rules) {
              const result = rules[rule as RuleKey](value, args);

              if (result instanceof RuleError) {
                this.validatorError.setError(field, result);

                // stop on first failure when 'bail' is set
                if (shouldStopOnFirstFailure) break;
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

  private getComputedFieldRules(givenRules: string[]): string[] {
    return givenRules.map((rule) => replaceRule(rule, givenRules, this.form));
  }

  private errorEventTrigger() {
    const errors = this.validatorError.errors;

    errors.forEach((errors) => {
      if (errors.length === 0) return;

      this.events.call('error:field', this.form, errors[0].element, errors);
    });
  }
}

export default Validator;
