import * as rules from '@/rules';
import { ValidatorOptions, EventName } from '@/types';
import ValidatorError from '@/modules/validator-error';
import { getValue, toCamelCase } from '@/utils/helpers';
import EventBus from './modules/events';
import Language from './modules/language';

type RuleKey = keyof typeof rules;

class Validator {
  private validatorError: ValidatorError;
  private events: EventBus;

  constructor(el: string, options?: ValidatorOptions) {
    Language.set(options?.lang);
    this.validatorError = new ValidatorError();
    this.events = new EventBus(options?.on);
    const form = document.querySelector(el) as HTMLFormElement;

    form.onsubmit = (event: SubmitEvent) => {
      this.events.call('validate:start');
      this.validatorError.clearErrors();

      const fields = form.querySelectorAll('[data-rules]');

      Array.prototype.forEach.call(fields, (input: HTMLInputElement) => {
        const fieldRules = input.getAttribute('data-rules')?.split('|');

        if (fieldRules) {
          const value = getValue(input);

          for (const fieldRule of fieldRules) {
            // eslint-disable-next-line prefer-const
            let [rule, args = ''] = fieldRule.split(':');

            rule = toCamelCase(rule);

            if (rule in rules) {
              try {
                const result = rules[rule as RuleKey](value, args);
                if (result instanceof Error) {
                  this.validatorError.setError(input, result);
                  if (this.shouldStopOnFirstFailure(fieldRules)) {
                    break;
                  }
                }
              } catch (e) {
                console.error(e);
                event.preventDefault();
              }
            }
          }
        }
      });

      if (this.validatorError.hasError) {
        event.preventDefault();
        this.errorEventTrigger();
      }

      this.events.call('validate:end');
    };
  }

  public on(event: EventName, callback: unknown): void {
    this.events.on(event, callback);
  }

  public off(event: EventName, callback: unknown): void {
    this.events.off(event, callback);
  }

  private shouldStopOnFirstFailure(givenRules: Array<string>) {
    return givenRules.includes('bail');
  }

  private errorEventTrigger() {
    this.validatorError.errors.forEach((errors) => {
      if (errors.length === 0) return;

      this.events.call('error:field', errors[0].element, errors);
    });
  }
}

export default Validator;
