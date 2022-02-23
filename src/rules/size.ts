import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { processRule, throwErrorWhen } from '@/utils/helpers';
import { MUST_NUMBER, MUST_POSITIVE, MUST_PROVIDED } from '@/types/error-dev';
import between from './between';
import length from './length';

function size(value: string, args = ''): true | RuleError {
  throwErrorWhen(args === '', MUST_PROVIDED);

  const [type, size] = args.split(',');

  const sizeInNumber = Number(size);
  throwErrorWhen(Number.isNaN(sizeInNumber), MUST_NUMBER);
  throwErrorWhen(type === 'string' && sizeInNumber < 0, MUST_POSITIVE);

  if (type === 'number') {
    return between(value, `${size},${size}`);
  } else {
    return length(value, size);
  }
}

export function replaceSizeRule(rule: string, rules: string[]): string {
  const { name: NAME, args: ARGS } = processRule(rule);

  const indexOfRule = rules.indexOf(rule);
  const rulesBeforeRule = rules.slice(0, indexOfRule);

  let type = 'string';
  if (rulesBeforeRule.includes('number') || rulesBeforeRule.includes('int')) {
    type = 'number';
  }

  return `${NAME}:${type},${ARGS.join(',')}`;
}

export default size as Rule;
