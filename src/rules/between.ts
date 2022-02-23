import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorWhen } from '@/utils/helpers';
import {
  BETWEEN,
  BETWEEN_LENGTH,
  EQUAL,
  GREATER_EQUAL,
  LENGTH,
  LESS_EQUAL,
  MAX_LENGTH,
  MIN_LENGTH,
  NUMBER,
  REQUIRED,
} from '@/types/error-cause';
import { MUST_NUMBER, MUST_POSITIVE, MUST_PROVIDED } from '@/types/error-dev';

function between(value: string, args = ''): true | RuleError {
  throwErrorWhen(args === '', MUST_PROVIDED);

  const [type, minArg = '', maxArg = ''] = args.split(',');

  const min = minArg === '' ? Number.NEGATIVE_INFINITY : Number(minArg);
  const max = maxArg === '' ? Number.POSITIVE_INFINITY : Number(maxArg);

  throwErrorWhen(Number.isNaN(min) || Number.isNaN(max), MUST_NUMBER);
  throwErrorWhen(min > max, 'min must be less than max');

  if (type === 'number') {
    return betweenForNumber(value, min, max);
  } else {
    return betweenForString(value, min, max);
  }
}

function betweenForNumber(value: string, min: number, max: number) {
  const valueInNumber = Number(value);
  if (value !== '' && !Number.isNaN(valueInNumber) && valueInNumber >= min && valueInNumber <= max) {
    return true;
  }

  if (min === Number.NEGATIVE_INFINITY && max === Number.POSITIVE_INFINITY) {
    return new RuleError(NUMBER);
  } else if (min === Number.NEGATIVE_INFINITY) {
    return new RuleError(LESS_EQUAL, String(max));
  } else if (max === Number.POSITIVE_INFINITY) {
    return new RuleError(GREATER_EQUAL, String(min));
  } else if (min === max) {
    return new RuleError(EQUAL, String(min));
  } else {
    return new RuleError(BETWEEN, String(min), String(max));
  }
}

function betweenForString(value: string, min: number, max: number) {
  throwErrorWhen(min < 0 && min !== Number.NEGATIVE_INFINITY, MUST_POSITIVE);
  throwErrorWhen(max < 0, MUST_POSITIVE);

  if (min < 0) min = 0;

  if (value.length >= min && value.length <= max) {
    return true;
  }

  if (min === 1 && max === Number.POSITIVE_INFINITY) {
    return new RuleError(REQUIRED);
  } else if (min === 0) {
    return new RuleError(MAX_LENGTH, String(max));
  } else if (max === Number.POSITIVE_INFINITY) {
    return new RuleError(MIN_LENGTH, String(min));
  } else if (min === max) {
    return new RuleError(LENGTH, String(min));
  } else {
    return new RuleError(BETWEEN_LENGTH, String(min), String(max));
  }
}

export default between as Rule;
