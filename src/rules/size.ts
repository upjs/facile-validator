import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { processRule, throwErrorWhen } from '@/utils/helpers';
import { SIZE_NUMBER, SIZE_STRING } from '@/types/error-cause';
import { MUST_NUMBER, MUST_POSITIVE, MUST_PROVIDED } from '@/types/error-dev';

function size(value: string, args = ''): true | RuleError {
  throwErrorWhen(args === '', MUST_PROVIDED);

  const [type, size] = args.split(',');

  const sizeInNumber = Number(size);
  throwErrorWhen(Number.isNaN(sizeInNumber), MUST_NUMBER);
  throwErrorWhen(type === 'string' && sizeInNumber < 0, MUST_POSITIVE);

  if (type === 'number') {
    return sizeForNumber(value, sizeInNumber);
  } else {
    return sizeForString(value, sizeInNumber);
  }
}

function sizeForNumber(value: string, size: number): true | RuleError {
  const valueInNumber = Number(value);
  if (!Number.isNaN(valueInNumber) && valueInNumber === size) {
    return true;
  }

  return new RuleError(SIZE_NUMBER, String(size));
}

function sizeForString(value: string, size: number): true | RuleError {
  if (value.length === size) {
    return true;
  }

  return new RuleError(SIZE_STRING, String(size));
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
