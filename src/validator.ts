import * as rules from '@/rules';
import { Rules, ValidatorOptions } from '@/types';
import ValidatorError from '@/modules/validator-error';
import { getValue, toCamelCase } from '@/utils/helpers';
import Language from './modules/language';

class Validator {
  private validatorError: ValidatorError;

  constructor(el: string, options?: ValidatorOptions) {
    const form = document.querySelector(el) as HTMLFormElement;
    if (options?.lang) {
      Language.set(options.lang);
    }
    this.validatorError = new ValidatorError();

    form.onsubmit = (event: SubmitEvent) => {
      this.removeErrors();
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
                const result = (rules as Rules)[rule](value, args);
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
        this.displayErrors();
      }
    };
  }

  private shouldStopOnFirstFailure(givenRules: Array<string>) {
    return givenRules.includes('bail');
  }

  private displayErrors() {
    this.validatorError.errors.forEach((errors) => {
      errors.forEach((error) => {
        const messageElement = document.createElement('p');
        messageElement.classList.add('validator-err');
        messageElement.innerHTML = error.message;

        if (error.element.parentNode) {
          error.element.parentNode.insertBefore(messageElement, error.element.nextSibling);
        }
      });
    });
  }

  private removeErrors() {
    document.querySelectorAll('.validator-err').forEach((el) => {
      el.remove();
    });
  }
}

export default Validator;
