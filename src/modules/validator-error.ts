import { ErrorDetail, LangObject } from '@/types';
import { format } from '@/utils/helpers';
import Language from './locale';
import { RuleError } from './rule-error';

export default class ValidatorError {
  public lang: LangObject;
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

    let errorMessage = this.lang?.[ruleError.message] || ruleError.message;
    errorMessage = format(errorMessage, ...ruleError.args);

    const errorDetail: ErrorDetail = {
      message: errorMessage,
      element,
      rule: ruleError.rule,
      cause: ruleError.message,
      args: ruleError.args,
    };

    errors.unshift(errorDetail);
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
