import { ErrorDetail, LocaleObject } from '@/types';
import { RuleError } from './rule-error';

export default class ValidatorError {
  public locale: LocaleObject | undefined;
  public errorsList: ErrorDetail[][];

  constructor(locale?: LocaleObject) {
    this.locale = locale;
    this.errorsList = [];
  }

  public setError(element: HTMLElement, ruleError: RuleError) {
    let errors = this.errorsList.find((error) => error[0].element === element);

    if (!errors) {
      errors = [];
      this.errorsList.push(errors);
    }

    let errorMessage = this.locale?.[ruleError.message] || ruleError.message;
    errorMessage = errorMessage.replace(/\$(\d)/g, (_, index) => ruleError.args?.[index - 1] || '');

    const errorDetail: ErrorDetail = {
      message: errorMessage,
      element,
      rule: ruleError.rule,
      cause: ruleError.message,
      args: ruleError.args,
    };

    errors.push(errorDetail);
  }

  public get hasError(): boolean {
    return Object.keys(this.errorsList).length > 0;
  }

  public get errors(): ErrorDetail[][] {
    return this.errorsList;
  }

  public clearErrors() {
    this.errorsList = [];
  }
}
