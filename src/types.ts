import { RuleError } from './modules/rule-error';

export interface ValidatorOption {
  locale?: LocalizeObject;
}

export interface Rule {
  (value: string, args?: string): true | RuleError;
}

export interface Rules {
  [key: string]: Rule;
}

export interface LocalizeObject {
  [key: string]: string;
}

export interface ErrorDetails {
  element: HTMLElement;
  rule: string;
  cause: string;
  message: string;
  args: string[];
}
