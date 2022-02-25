import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { when } from '@/utils/helpers';
import { MUST_NUMBER, MUST_POSITIVE, MUST_PROVIDED } from '@/types/error-dev';
import { GREATER_EQUAL, MIN_LENGTH } from '@/types/error-cause';

function min(value: string, args = ''): true | RuleError {
  when(args === '').throwError(MUST_PROVIDED);

  const [type, min] = args.split(',');
  when(!min).throwError(MUST_PROVIDED);

  const minInNumber = Number(min);
  when(Number.isNaN(minInNumber)).throwError(MUST_NUMBER);

  if (type === 'number') {
    return minForNumber(value, minInNumber);
  } else {
    return minForString(value, minInNumber);
  }
}

function minForNumber(value: string, min: number) {
  const valueInNumber = Number(value);
  if (value !== '' && !Number.isNaN(valueInNumber) && valueInNumber >= min) {
    return true;
  }

  return new RuleError(GREATER_EQUAL, String(min));
}

function minForString(value: string, min: number) {
  when(min < 0).throwError(MUST_POSITIVE);

  if (value.length >= min) {
    return true;
  }

  return new RuleError(MIN_LENGTH, String(min));
}

export default min as Rule;
