import { AdapterFn, FormInputEelement } from '@/types';
import { getValue, processRule, toCamelCase } from '@/utils/helpers';

const mapMethods: Record<string, AdapterFn> = {
  requiredIf: prependTargetValue,
  between: prependType,
  size: prependType,
  min: prependType,
  max: prependType,
  in: prependType,
};

export function adaptRule(rule: string, rules: string[], field: FormInputEelement, form: HTMLFormElement): string {
  const ruleName = toCamelCase(rule.split(':')[0]);

  return mapMethods[ruleName]?.(rule, rules, field, form) || rule;
}

export function prependType(rule: string, rules: string[]): string {
  const { name: NAME, args: ARGS } = processRule(rule);

  const indexOfRule = rules.indexOf(rule);
  const rulesBeforeRule = rules.slice(0, indexOfRule);

  let type = 'string';
  if (rulesBeforeRule.includes('number') || rulesBeforeRule.includes('int') || rulesBeforeRule.includes('integer')) {
    type = 'number';
  } else if (rulesBeforeRule.includes('array')) {
    type = 'array';
  }

  return `${NAME}:${type},${ARGS.join(',')}`;
}

function prependTargetValue(rule: string): string {
  const { name: NAME, args: ARGS } = processRule(rule);

  if (ARGS.length === 0) return NAME;

  let targetValue = '';
  if (ARGS.length > 0) {
    const targetField = document.getElementById(ARGS[0]);
    if (targetField !== null) {
      targetValue = getValue(targetField as FormInputEelement);
    }
  }

  ARGS.splice(0, 1, targetValue);

  return `${NAME}:${ARGS.join(',')}`;
}
