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

export interface Events {
  'validate:start': () => void;
  'validate:end': () => void;
  'validate:success': () => void;
  'validate:failed': () => void;
  'error:field': (element: HTMLElement, errors: ErrorDetail[]) => void;
}

export type EventsName = keyof Events;
export type EventsOption = Partial<Events>;
export type EventsList = {
  [P in EventsName]?: Events[P][];
};
