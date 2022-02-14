import * as rules from './rules';
import { Rules } from './types';
import ValidatorError from './ValidatorError';

class Validator {
  private invalidElements: ValidatorError[] = [];

  constructor(el: string) {
    const form = document.querySelector(el) as HTMLFormElement;

    form.onsubmit = (event: SubmitEvent) => {
      try {
        this.removeErrors();
        this.invalidElements = [];
        const inputs = form.querySelectorAll('[data-rules]');

        Array.prototype.forEach.call(inputs, (input: HTMLInputElement) => {
          const givenRules = input.getAttribute('data-rules')?.split('|');

          if (givenRules) {
            for (const givenRule of givenRules) {
              let rule = givenRule;
              let args = '';

              if (this.ruleHasArguments(givenRule)) {
                [rule, args] = givenRule.split(':');
              }

              if (rule in rules) {
                const result = (rules as Rules)[rule](input.value, args);

                if (result instanceof Error) {
                  const invalidElement = new ValidatorError(result.message, input);
                  this.invalidElements.unshift(invalidElement);
                  if (this.shouldStopOnFirstFailure(givenRules)) {
                    break;
                  }
                }
              }
            }
          }
        });

        if (this.invalidElements.length > 0) {
          event.preventDefault();
          this.displayErrors();
        }
      } catch (e: unknown) {
        console.error(e);
        event.preventDefault();
      }
    };
  }

  private ruleHasArguments(rule: string) {
    return rule.split(':').length === 2;
  }

  private shouldStopOnFirstFailure(givenRules: Array<string>) {
    return givenRules.includes('bail');
  }

  private displayErrors() {
    for (const error of this.invalidElements) {
      const input = error.element;

      const message = document.createElement('p');
      message.classList.add('validator-err');
      message.innerHTML = error.message;

      if (input.parentNode) {
        input.parentNode.insertBefore(message, input.nextSibling);
      }
    }
  }

  private removeErrors() {
    document.querySelectorAll('.validator-err').forEach((el) => {
      el.remove();
    });
  }
}

export default Validator;
