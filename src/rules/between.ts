import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorWhen } from '@/utils/helpers';
import { BETWEEN_NUMBER, BETWEEN_LENGTH } from '@/types/error-cause';
import { MUST_NUMBER, MUST_POSITIVE, MUST_PROVIDED } from '@/types/error-dev';

function between(value: string, args = ''): true | RuleError {
  throwErrorWhen(args === '', MUST_PROVIDED);

  const [type, minArg, maxArg] = args.split(',');
  throwErrorWhen(!minArg || !maxArg, MUST_PROVIDED);

  const min = Number(minArg);
  const max = Number(maxArg);
  throwErrorWhen(Number.isNaN(min) || Number.isNaN(max), MUST_NUMBER);
  throwErrorWhen(min > max, 'min must be less than max');
  throwErrorWhen(min === max, 'min and max must not be equal');

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

  return new RuleError(BETWEEN_NUMBER, String(min), String(max));
}

function betweenForString(value: string, min: number, max: number) {
  throwErrorWhen(min < 0 || max < 0, MUST_POSITIVE);

  if (value.length >= min && value.length <= max) {
    return true;
  }

  return new RuleError(BETWEEN_LENGTH, String(min), String(max));
}

export default between as Rule;
