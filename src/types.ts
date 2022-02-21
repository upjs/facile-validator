import { RuleError } from '@/modules/rule-error';

export type ArrayOfValues<T> = {
  [P in keyof T]: T[P][];
};

export interface ValidatorOptions {
  lang?: Record<string, string>;
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

export interface ValidateResponse {
  form: HTMLFormElement;
  status: 'failed' | 'success';
}

export interface Events {
  'validate:start': (form: HTMLFormElement) => void;
  'validate:end': (form: HTMLFormElement, status: ValidateResponse['status']) => void;
  'validate:success': (form: HTMLFormElement) => void;
  'validate:failed': (form: HTMLFormElement) => void;
  'error:field': (form: HTMLFormElement, element: HTMLElement, errors: ErrorDetail[]) => void;
}

export type EventsName = keyof Events;
export type EventsOption = Partial<Events>;
export type EventsList = {
  [P in EventsName]?: Events[P][];
};

export type ReplacerFn = (rule: string, rules: string[], form: HTMLFormElement) => string;
