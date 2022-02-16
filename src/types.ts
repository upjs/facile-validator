import { RuleError } from '@/modules/rule-error';

export interface ValidatorOptions {
  lang?: LangObject;
}

export interface Rule {
  (value: string, args?: string): true | RuleError;
}

export interface Rules {
  [key: string]: Rule;
}

export interface LangObject {
  [key: string]: string;
}

export interface ErrorDetail {
  element: HTMLElement;
  rule: string;
  cause: string;
  message: string;
  args: string[];
}
