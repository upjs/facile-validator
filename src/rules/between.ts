import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { when } from '@/utils/helpers';
import { BETWEEN_NUMBER, BETWEEN_LENGTH } from '@/types/rules';
import { ARGUMENT_MUST_BE_A_NUMBER, ARGUMENT_MUST_BE_POSITIVE, ARGUMENT_MUST_BE_PROVIDED } from '@/types/error-dev';

function between(value: string, args = ''): true | RuleError {
  when(args === '').throwError(ARGUMENT_MUST_BE_PROVIDED);

  const [type, minArg, maxArg] = args.split(',');
  when(!minArg || !maxArg).throwError(ARGUMENT_MUST_BE_PROVIDED);

  const min = Number(minArg);
  const max = Number(maxArg);
  when(Number.isNaN(min) || Number.isNaN(max)).throwError(ARGUMENT_MUST_BE_A_NUMBER);
  when(min > max).throwError('min must be less than max');
  when(min === max).throwError('min and max must not be equal');

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
  when(min < 0 || max < 0).throwError(ARGUMENT_MUST_BE_POSITIVE);

  if (value.length >= min && value.length <= max) {
    return true;
  }

  return new RuleError(BETWEEN_LENGTH, String(min), String(max));
}

export default between as Rule;
