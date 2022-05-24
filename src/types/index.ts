import { RuleError } from '@/modules/rule-error';
import * as rules from '@/types/rules';

export type ArrayOfValues<T> = {
  [P in keyof T]: T[P][];
};

type ErrorCause = typeof rules;
export type LangKeys = ErrorCause[keyof ErrorCause];
export type Lang = Partial<Record<LangKeys, string>>;
export type RuleName = typeof rules[keyof typeof rules];
export type XRules = Record<string, any>;

export interface ValidatorOptions {
  lang?: Lang;
  on?: Partial<Events>;
  renderErrors?: boolean;
  xRules?: XRules;
}

export interface Rule {
  (value: string, args?: string): true | RuleError;
}

export interface ErrorDetail {
  element: FormInputElement;
  rule: string;
  cause: string;
  message: string;
  args: string[];
}

export interface Events {
  'validation:start': (parentEl: HTMLElement) => void;
  'validation:end': (parentEl: HTMLElement, isSuccessful: boolean) => void;
  'validation:success': (parentEl: HTMLElement) => void;
  'validation:failed': (parentEl: HTMLElement) => void;
  'field:error': (parentEl: HTMLElement, element: FormInputElement, errors: ErrorDetail[]) => void;
}

export type EventsName = keyof Events;
export type EventsOption = Partial<Events>;
export type EventsList = {
  [P in EventsName]?: Events[P][];
};

export type AdapterFn = (
  rule: string,
  rules: string[],
  field: FormInputElement,
  parentEl: HTMLElement,
  xRules?: XRules
) => string;

export type FormInputElement = HTMLInputElement | HTMLSelectElement;
