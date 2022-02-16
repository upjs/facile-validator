import * as rules from '@/rules';
import { Rules, ValidatorOption } from '@/types';
import ValidatorError from '@/modules/validator-error';
import { getValue, toCamelCase } from '@/utils/helpers';

class Validator {
  private validatorError: ValidatorError;

  constructor(el: string, options?: ValidatorOption) {
    const form = document.querySelector(el) as HTMLFormElement;
    this.validatorError = new ValidatorError(options?.locale);

    form.onsubmit = (event: SubmitEvent) => {
      try {
        this.removeErrors();
        this.validatorError.clearErrors();
        const inputs = form.querySelectorAll('[data-rules]');

        Array.prototype.forEach.call(inputs, (input: HTMLInputElement) => {
          const givenRules = input.getAttribute('data-rules')?.split('|');

          if (givenRules) {
            const value = getValue(input);

            for (const givenRule of givenRules) {
              // eslint-disable-next-line prefer-const
              let [rule, args = ''] = givenRule.split(':');

              rule = toCamelCase(rule);

              if (rule in rules) {
                const result = (rules as Rules)[rule](value, args);

                if (result instanceof Error) {
                  this.validatorError.setError(input, result);
                  if (this.shouldStopOnFirstFailure(givenRules)) {
                    break;
                  }
                }
              }
            }
          }
        });

        if (this.validatorError.hasError) {
          event.preventDefault();
          this.displayErrors();
        }
      } catch (e: unknown) {
        console.error(e);
        event.preventDefault();
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
