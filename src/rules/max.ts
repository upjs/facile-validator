import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { when } from '@/utils/helpers';
import { MUST_NUMBER, MUST_POSITIVE, MUST_PROVIDED } from '@/types/error-dev';
import { LESS_EQUAL, MAX_LENGTH } from '@/types/error-cause';

function max(value: string, args = ''): true | RuleError {
  when(args === '').throwError(MUST_PROVIDED);

  const [type, max] = args.split(',');
  when(!max).throwError(MUST_PROVIDED);

  const maxInNumber = Number(max);
  when(Number.isNaN(maxInNumber)).throwError(MUST_NUMBER);

  if (type === 'number') {
    return maxForNumber(value, maxInNumber);
  } else {
    return maxForString(value, maxInNumber);
  }
}

function maxForNumber(value: string, max: number) {
  const valueInNumber = Number(value);
  if (value !== '' && !Number.isNaN(valueInNumber) && valueInNumber <= max) {
    return true;
  }

  return new RuleError(LESS_EQUAL, String(max));
}

function maxForString(value: string, max: number) {
  when(max < 0).throwError(MUST_POSITIVE);

  if (value.length <= max) {
    return true;
  }

  return new RuleError(MAX_LENGTH, String(max));
}

export default max as Rule;
