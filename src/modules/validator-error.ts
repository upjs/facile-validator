import { ErrorDetail } from '@/types';
import { lang } from '@/utils/helpers';
import Language from './language';
import { RuleError } from './rule-error';

export default class ValidatorError {
  public lang: Record<string, string>;
  public errorsList: ErrorDetail[][];

  constructor() {
    this.lang = Language.get();
    this.errorsList = [];
  }

  public setError(element: HTMLElement, ruleError: RuleError) {
    let errors = this.errorsList.find((error) => error[0].element === element);

    if (!errors) {
      errors = [];
      this.errorsList.push(errors);
    }

    const errorMessage = lang(ruleError.message, ...ruleError.args);

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
