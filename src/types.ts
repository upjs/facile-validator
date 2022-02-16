import { RuleError } from './modules/rule-error';

export interface ValidatorOptions {
  locale?: LocaleObject;
}

export interface Rule {
  (value: string, args?: string): true | RuleError;
}

export interface Rules {
  [key: string]: Rule;
}

export interface LocaleObject {
  [key: string]: string;
}

export interface ErrorDetail {
  element: HTMLElement;
  rule: string;
  cause: string;
  message: string;
  args: string[];
}
