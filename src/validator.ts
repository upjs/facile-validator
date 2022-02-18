import * as rules from '@/rules';
import { ValidatorOptions, EventsName, Events } from '@/types';
import ValidatorError from '@/modules/validator-error';
import { getValue, toCamelCase } from '@/utils/helpers';
import EventBus from './modules/events';
import Language from './modules/language';

type RuleKey = keyof typeof rules;

class Validator {
  private validatorError: ValidatorError;
  private events: EventBus;
  private options?: ValidatorOptions;

  constructor(el: string, options?: ValidatorOptions) {
    this.options = options;
    Language.set(options?.lang);
    this.validatorError = new ValidatorError();
    this.events = new EventBus(options?.on);
    const form = document.querySelector(el);

    if (form !== null && form instanceof HTMLFormElement) {
      form.addEventListener('submit', this.handleSubmit.bind(this));
    }
  }

  private async handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.events.call('validate:start');
    this.validatorError.clearErrors();
    const form = event.target as HTMLFormElement;
    await this.validate(form);

    if (this.validatorError.hasError) {
      this.errorEventTrigger();
    } else {
      this.events.call('validate:success');
      if (this.options?.autoSubmit !== false) {
        form.submit();
      }
    }

    this.events.call('validate:end');
  }

  private async validate(form: HTMLFormElement) {
    const fields = form.querySelectorAll('[data-rules]') as NodeListOf<HTMLInputElement>;
    let processedFields = 0;

    return new Promise((resolve) => {
      fields.forEach(async (input: HTMLInputElement) => {
        const fieldRules = input.getAttribute('data-rules')?.split('|');

        if (fieldRules) {
          const value = await getValue(input);
          processedFields++;
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
              }
            }
          }
        }
        if (processedFields === fields.length) {
          resolve('');
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

  private errorEventTrigger() {
    this.validatorError.errors.forEach((errors) => {
      if (errors.length === 0) return;

      this.events.call('error:field', errors[0].element, errors);
    });
  }
}

export default Validator;
