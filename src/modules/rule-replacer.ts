/* eslint-disable @typescript-eslint/no-unused-vars */

import { required } from '@/rules';
import { ReplacerFn } from '@/types';
import { getSyncValue } from '@/utils/helpers';

const mapMethods: Record<string, ReplacerFn> = {
  requiredIf: replaceRequiredIfRule,
  size: replaceSizeRule,
};

export function replaceRule(rule: string, rules: string[], form: HTMLFormElement): string {
  const ruleName = rule.split(':')[0];
  return mapMethods[ruleName]?.(rule, rules, form) || rule;
}

function processRule(rule: string): { name: string; args: string[] } {
  const [ruleName, args] = rule.split(':');

  return {
    name: ruleName,
    args: args ? args.split(',') : [],
  };
}

function replaceSizeRule(rule: string, rules: string[], _form: HTMLFormElement): string {
  const { name: NAME, args: ARGS } = processRule(rule);

  const indexOfRule = rules.indexOf(rule);
  const rulesBeforeRule = rules.slice(0, indexOfRule);

  let type = 'string';
  if (rulesBeforeRule.includes('number') || rulesBeforeRule.includes('int')) {
    type = 'number';
  }

  return `${NAME}:${type},${ARGS.join(',')}`;
}

function replaceRequiredIfRule(rule: string, _rules: string[], _form: HTMLFormElement): string {
  const { name: NAME, args: ARGS } = processRule(rule);

  if (ARGS.length === 0) return NAME;

  const field = document.getElementById(ARGS[0]);
  const fieldValue = getSyncValue(field as HTMLInputElement) || '';
  const hasValue = required(fieldValue);

  return hasValue === true ? `${NAME}:true` : `${NAME}:false`;
}
