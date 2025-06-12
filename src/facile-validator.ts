import * as rules from '@/rules';
import { ValidatorOptions, EventsName, Events, FormInputElement, Lang } from '@/types';
import ValidatorError from '@/modules/validator-error';
import { getValue, toCamelCase, defaultErrorListeners, processRule } from '@/utils/helpers';
import EventBus from './modules/events';
import Language from './modules/language';
import { RuleError } from './modules/rule-error';
import { adaptRule } from './modules/rule-adapter';

type RuleKey = keyof typeof rules;

const defaultOptions: ValidatorOptions = {
  renderErrors: true,
  onFieldChangeValidationDelay: 500,
};

class Validator {
  private validatorError: ValidatorError;
  private events: EventBus;
  private options: ValidatorOptions;
  private container: HTMLElement;

  constructor(container: HTMLElement, options: ValidatorOptions = {}) {
    if (container === null || !(container instanceof HTMLElement)) {
      throw new Error('Invalid container element');
    }

    this.options = Object.assign(defaultOptions, options);
    this.validatorError = new ValidatorError();
    this.events = new EventBus(this.options.on);
    this.container = container;

    Language.set(this.options.lang);

    if (this.options.renderErrors) {
      defaultErrorListeners(this.events);
    }

    this.events.on('validation:start', () => this.validatorError.clearErrors());
    this.events.on('validation:failed', () => this.triggerFieldErrorEvent());

    if (options.onFieldChangeValidation) {
      this.validateOnFieldChange();
    }
  }

  public validate(fields?: NodeListOf<FormInputElement> | FormInputElement[], shouldFireResultsEvent = true): boolean {
    this.events.call('validation:start', this.container);
    let isSuccessful = true;
    let status: 'success' | 'failed' = 'success';

    if (fields === undefined) {
      fields = this.container.querySelectorAll<FormInputElement>('[data-rules]');
    }

    if (fields.length > 0) {
      isSuccessful = this.validateFields(Array.from(fields));
      status = isSuccessful ? 'success' : 'failed';
    }

    this.events.call('validation:end', this.container, isSuccessful);

    if (shouldFireResultsEvent) {
      this.events.call(`validation:${status}`, this.container);
    }

    return isSuccessful;
  }

  public values(): Record<string, string> {
    const values: Record<string, string> = {};
    const fields = this.container.querySelectorAll<FormInputElement>('input, textarea, select');

    fields.forEach((field) => {
      const name = field.getAttribute('name');
      if (name) {
        values[name] = getValue(field);
      }
    });

    return values;
  }

  public on<K extends EventsName>(event: K, callback: Events[K]): void {
    this.events.on(event, callback);
  }

  public off<K extends EventsName>(event: K, callback: Events[K]): void {
    this.events.off(event, callback);
  }

  private validateFields(fields: FormInputElement[]): boolean {
    for (const field of fields) {
      const fieldRules = field.getAttribute('data-rules')?.split('|');

      if (fieldRules && fieldRules.length > 0) {
        const value = getValue(field);
        const shouldStopOnFirstFailure = this.shouldStopOnFirstFailure(fieldRules);
        const computedFieldRules = this.getComputedFieldRules(fieldRules, field);

        for (const fieldRule of computedFieldRules) {
          const {
            name: ruleName,
            argsValue: ruleArgs,
            customErrorMessage,
          } = processRule(fieldRule, this.options.xRules);
          const ruleKey = toCamelCase(ruleName) as RuleKey;

          if (this.isNullable(ruleKey) && value === '') {
            break;
          }

          if (ruleKey in rules) {
            try {
              const result = rules[ruleKey](value, ruleArgs);

              if (result instanceof RuleError) {
                let customMessage = '';

                if (customErrorMessage) {
                  customMessage =
                    typeof customErrorMessage === 'function' ? customErrorMessage(field) : customErrorMessage;
                }
                this.validatorError.setError(field, ruleName, result, customMessage);
                if (shouldStopOnFirstFailure) {
                  break;
                }
              }
            } catch (error) {
              console.error(new Error(`${ruleName}: ${(error as Error).message}`));
              return false;
            }
          }
        }
      }
    }

    return !this.validatorError.hasError;
  }

  private shouldStopOnFirstFailure(givenRules: Array<string>) {
    return givenRules.includes('bail');
  }

  private isNullable(givenRules: string) {
    return givenRules === 'nullable';
  }

  private getComputedFieldRules(givenRules: string[], field: FormInputElement): string[] {
    return givenRules.map((rule) => adaptRule(rule, givenRules, field, this.container, this.options.xRules));
  }

  private triggerFieldErrorEvent() {
    const totalErrors = this.validatorError.errors;

    totalErrors.forEach((fieldErrors) => {
      if (fieldErrors.length === 0) return;

      this.events.call('field:error', this.container, fieldErrors[0].element, fieldErrors);
    });
  }

  private validateOnFieldChange() {
    let timeout: number;
    this.container.addEventListener('input', (event: Event) => {
      window.clearTimeout(timeout);
      const delay = this.options.onFieldChangeValidationDelay;

      timeout = window.setTimeout(() => {
        const target = event.target as FormInputElement;

        if (target.matches('[data-rules]')) {
          const result = this.validate([target], false);
          if (result === false) {
            this.triggerFieldErrorEvent();
          }
        }
      }, delay);
    });
  }

  public setLanguage(lang: Lang) {
    Language.set(lang);
  }
}

export default Validator;
