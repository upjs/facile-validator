import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { between } from '@/rules';
import { processRule, throwErrorWhen } from '@/utils/helpers';
import { MUST_PROVIDED } from '@/types/error-dev';

function size(value: string, args = ''): true | RuleError {
  throwErrorWhen(args === '', MUST_PROVIDED);

  const [type, size = ''] = args.split(',');
  throwErrorWhen(size === '', MUST_PROVIDED);

  return between(value, `${type},${size},${size}`);
}

export function replaceSizeRule(rule: string, rules: string[]): string {
  const { name: NAME, args: ARGS } = processRule(rule);

  const indexOfRule = rules.indexOf(rule);
  const rulesBeforeRule = rules.slice(0, indexOfRule);

  let type = 'string';
  if (rulesBeforeRule.includes('number') || rulesBeforeRule.includes('int') || rulesBeforeRule.includes('integer')) {
    type = 'number';
  }

  return `${NAME}:${type},${ARGS.join(',')}`;
}

export default size as Rule;
