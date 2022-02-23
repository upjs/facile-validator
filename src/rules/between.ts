import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorWhen } from '@/utils/helpers';
import { BETWEEN, EQUAL, GREATER_EQUAL, LESS_EQUAL, NUMBER } from '@/types/error-cause';
import { MUST_NUMBER, MUST_PROVIDED } from '@/types/error-dev';

function between(value: string, args = ''): true | RuleError {
  throwErrorWhen(args === '', MUST_PROVIDED);

  const [minArg, maxArg] = args.split(',');

  const min = minArg === '' ? Number.NEGATIVE_INFINITY : Number(minArg);
  const max = maxArg === '' ? Number.POSITIVE_INFINITY : Number(maxArg);

  throwErrorWhen(Number.isNaN(min) || Number.isNaN(max), MUST_NUMBER);
  throwErrorWhen(min > max, 'min must be less than max');

  const valueInNumber = Number(value);
  if (value !== '' && !Number.isNaN(valueInNumber) && valueInNumber >= min && valueInNumber <= max) {
    return true;
  }

  if (min === Number.NEGATIVE_INFINITY && max === Number.POSITIVE_INFINITY) {
    return new RuleError(NUMBER);
  } else if (min === Number.NEGATIVE_INFINITY) {
    return new RuleError(LESS_EQUAL, maxArg);
  } else if (max === Number.POSITIVE_INFINITY) {
    return new RuleError(GREATER_EQUAL, minArg);
  } else if (min === max) {
    return new RuleError(EQUAL, minArg);
  } else {
    return new RuleError(BETWEEN, minArg, maxArg);
  }
}

export default between as Rule;
