import { RuleError } from '@/modules/rule-error';

export type ArrayOfValues<T> = {
  [P in keyof T]: T[P][];
};

export interface ValidatorOptions {
  lang?: Record<string, string>;
  on?: Event;
}

export interface Rule {
  (value: string, args?: string): true | RuleError;
}

export interface Rules {
  [key: string]: Rule;
}

export interface ErrorDetail {
  element: HTMLElement;
  rule: string;
  cause: string;
  message: string;
  args: string[];
}

export interface Event {
  'validate:start'?: () => void;
  'validate:end'?: () => void;
  'error:field'?: (element: HTMLElement, errors: ErrorDetail[]) => void;
}

export type EventList = ArrayOfValues<Event>;
export type EventName = keyof EventList;
