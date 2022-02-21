/* eslint-disable @typescript-eslint/no-unused-vars */

import { required } from '@/rules';
import { getSyncValue } from '@/utils/helpers';

export function replaceRule(rule: string, rules: string[], _form: HTMLFormElement): string {
  if (rule.includes('size:')) {
    return replaceSizeRule(rule, rules);
  } else if (rule.includes('required-if:')) {
    return replaceRequiredIfRule(rule);
  }

  return rule;
}

function processRule(rule: string): { name: string; args: string[] } {
  const [ruleName, args] = rule.split(':');

  return {
    name: ruleName,
    args: args ? args.split(',') : [],
  };
}

function replaceSizeRule(rule: string, rules: string[]): string {
  const RULE = processRule(rule);

  const indexOfRule = rules.indexOf(rule);
  const rulesBeforeRule = rules.slice(0, indexOfRule);

  let type = 'string';
  if (rulesBeforeRule.includes('number') || rulesBeforeRule.includes('int')) {
    type = 'number';
  }

  return `${RULE.name}:${type},${RULE.args.join(',')}`;
}

function replaceRequiredIfRule(rule: string): string {
  const RULE = processRule(rule);

  if (RULE.args.length === 0) return `${RULE.name}`;

  const field = document.getElementById(RULE.args[0]);
  const fieldValue = getSyncValue(field as HTMLInputElement) || '';
  const hasValue = required(fieldValue);

  return hasValue === true ? `${RULE.name}:true` : `${RULE.name}:false`;
}
