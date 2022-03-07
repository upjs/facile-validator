import { RuleError } from '@/modules/rule-error';
import * as errorCause from '@/types/error-cause';

export type ArrayOfValues<T> = {
  [P in keyof T]: T[P][];
};

type ErrorCause = typeof errorCause;
export type LangKeys = ErrorCause[keyof ErrorCause];
export type Lang = Partial<Record<LangKeys, string>>;

export interface ValidatorOptions {
  lang?: Lang;
  on?: Events;
  autoSubmit?: boolean;
}

export interface Rule {
  (value: string, args?: string): true | RuleError;
}

export interface ErrorDetail {
  element: HTMLElement;
  rule: string;
  cause: string;
  message: string;
  args: string[];
}

export interface Events {
  'validate:start': (form: HTMLFormElement) => void;
  'validate:end': (form: HTMLFormElement, isSuccessful: boolean) => void;
  'validate:success': (form: HTMLFormElement) => void;
  'validate:failed': (form: HTMLFormElement) => void;
  'error:field': (form: HTMLFormElement, element: HTMLElement, errors: ErrorDetail[]) => void;
}

export type EventsName = keyof Events;
export type EventsOption = Partial<Events>;
export type EventsList = {
  [P in EventsName]?: Events[P][];
};

export type AdapterFn = (rule: string, rules: string[], form: HTMLFormElement, field: HTMLElement) => string;
