import * as rules from '@/rules';
import { ValidatorOptions, EventsName, Events, FormInputElement } from '@/types';
import ValidatorError from '@/modules/validator-error';
import { getValue, toCamelCase, defaultErrorListeners, processRule } from '@/utils/helpers';
import EventBus from './modules/events';
import Language from './modules/language';
import { RuleError } from './modules/rule-error';
import { adaptRule } from './modules/rule-adapter';

type RuleKey = keyof typeof rules;

const defaultOptions: ValidatorOptions = {
  renderErrors: true,
};

class Validator {
  private validatorError: ValidatorError;
  private events: EventBus;
  private options: ValidatorOptions;
  private parentEl: HTMLElement;

  constructor(parentEl: HTMLElement, options: ValidatorOptions = {}) {
    if (parentEl === null || !(parentEl instanceof HTMLElement)) {
      throw new Error('Invalid parentEl element');
    }

    this.options = Object.assign(defaultOptions, options);
    this.validatorError = new ValidatorError();
    this.events = new EventBus(this.options.on);
    this.parentEl = parentEl;

    Language.set(this.options.lang);

    if (this.options.renderErrors) {
      defaultErrorListeners(this.events);
    }

    this.events.on('validation:start', () => this.validatorError.clearErrors());
    this.events.on('validation:failed', () => this.errorEventTrigger());
  }

  public validate(): boolean {
    this.events.call('validation:start', this.parentEl);
    let isSuccessful = true;
    let status = 'success';

    const fields = this.parentEl.querySelectorAll<FormInputElement>('[data-rules]');
    if (fields.length > 0) {
      isSuccessful = this.validateFields(Array.from(fields));
      status = isSuccessful ? 'success' : 'failed';
    }

    this.events.call(`validation:${status}` as keyof Events, this.parentEl);
    this.events.call('validation:end', this.parentEl, isSuccessful);

    return isSuccessful;
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
          const { name: ruleName, argsText: ruleArgs } = processRule(fieldRule, this.options.xRules);
          const ruleKey = toCamelCase(ruleName) as RuleKey;

          if (this.isNullable(ruleKey) && value === '') {
            break;
          }

          if (ruleKey in rules) {
            try {
              const result = rules[ruleKey](value, ruleArgs);

              if (result instanceof RuleError) {
                this.validatorError.setError(field, ruleName, result);
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
    return givenRules.map((rule) => adaptRule(rule, givenRules, field, this.parentEl, this.options.xRules));
  }

  private errorEventTrigger() {
    const errors = this.validatorError.errors;

    errors.forEach((errors) => {
      if (errors.length === 0) return;

      this.events.call('field:error', this.parentEl, errors[0].element, errors);
    });
  }
}

export default Validator;
