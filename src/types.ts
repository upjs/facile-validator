import { RuleError } from '@/modules/rule-error';

export type ArrayOfValues<T> = {
  [P in keyof T]: T[P][];
};

export interface ValidatorOptions {
  lang?: LangObject;
  on?: EventsOption;
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

export interface EventsOption {
  'validate:start'?: () => void;
  'validate:end'?: () => void;
  'error:field'?: (element: HTMLElement, errors: ErrorDetail[]) => void;
}
