/* eslint-disable @typescript-eslint/no-unused-vars */

import { replaceRequiredIfRule } from '@/rules/required-if';
import { ReplacerFn } from '@/types';
import { processRule } from '@/utils/helpers';

const mapMethods: Record<string, ReplacerFn> = {
  requiredIf: replaceRequiredIfRule,
  between: attachTypeArgument,
  size: attachTypeArgument,
  min: attachTypeArgument,
  max: attachTypeArgument,
};

export function replaceRule(rule: string, rules: string[], form: HTMLFormElement): string {
  const ruleName = rule.split(':')[0];

  return mapMethods[ruleName]?.(rule, rules, form) || rule;
}

export function attachTypeArgument(rule: string, rules: string[]): string {
  const { name: NAME, args: ARGS } = processRule(rule);

  const indexOfRule = rules.indexOf(rule);
  const rulesBeforeRule = rules.slice(0, indexOfRule);

  let type = 'string';
  if (rulesBeforeRule.includes('number') || rulesBeforeRule.includes('int') || rulesBeforeRule.includes('integer')) {
    type = 'number';
  }

  return `${NAME}:${type},${ARGS.join(',')}`;
}
