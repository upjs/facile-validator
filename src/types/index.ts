import { RuleError } from '@/modules/rule-error';
import * as rules from '@/types/rules';

export type ArrayOfValues<T> = {
  [P in keyof T]: T[P][];
};

type ErrorCause = typeof rules;
export type LangKeys = ErrorCause[keyof ErrorCause];
export type Lang = Partial<Record<LangKeys, string>>;

export interface ValidatorOptions {
  lang?: Lang;
  on?: Partial<Events>;
  renderErrors?: boolean;
}

export interface Rule {
  (value: string, args?: string): true | RuleError;
}

export interface ErrorDetail {
  element: FormInputEelement;
  rule: string;
  cause: string;
  message: string;
  args: string[];
}

export interface Events {
  'validate:start': (form: HTMLElement) => void;
  'validate:end': (form: HTMLElement, isSuccessful: boolean) => void;
  'validate:success': (form: HTMLElement) => void;
  'validate:failed': (form: HTMLElement) => void;
  'error:field': (form: HTMLElement, element: FormInputEelement, errors: ErrorDetail[]) => void;
}

export type EventsName = keyof Events;
export type EventsOption = Partial<Events>;
export type EventsList = {
  [P in EventsName]?: Events[P][];
};

export type AdapterFn = (rule: string, rules: string[], field: FormInputEelement, form: HTMLElement) => string;

export type FormInputEelement = HTMLInputElement | HTMLSelectElement;
