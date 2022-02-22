/* eslint-disable @typescript-eslint/no-unused-vars */

import { replaceRequiredIfRule } from '@/rules/required-if';
import { replaceSizeRule } from '@/rules/size';
import { ReplacerFn } from '@/types';

const mapMethods: Record<string, ReplacerFn> = {
  requiredIf: replaceRequiredIfRule,
  size: replaceSizeRule,
};

export function replaceRule(rule: string, rules: string[], form: HTMLFormElement): string {
  const ruleName = rule.split(':')[0];

  return mapMethods[ruleName]?.(rule, rules, form) || rule;
}
