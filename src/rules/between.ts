import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { BETWEEN, GREATER_EQUAL, LESS_EQUAL, NUMBER } from '@/types/error-cause';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';

function between(value: string, args: string): true | RuleError {
  throwErrorIfArgsNotProvided(args, 'between rule expects at least one argument');

  const [minArg, maxArg] = args.split(',');

  const min = minArg === '' ? Number.NEGATIVE_INFINITY : Number(minArg);
  const max = maxArg === '' ? Number.POSITIVE_INFINITY : Number(maxArg);

  if (Number.isNaN(min) || Number.isNaN(max)) {
    throw new Error('between rule expects two numbers as arguments');
  }

  if (min > max) {
    throw new Error('between rule expects first argument to be less than or equal to second argument');
  }

  const valueInNumber = Number(value);
  if (!Number.isNaN(valueInNumber) && valueInNumber >= min && valueInNumber <= max) {
    return true;
  }

  if (min === Number.NEGATIVE_INFINITY && max === Number.POSITIVE_INFINITY) {
    return new RuleError('between', NUMBER);
  } else if (min === Number.NEGATIVE_INFINITY) {
    return new RuleError('between', LESS_EQUAL, maxArg);
  } else if (max === Number.POSITIVE_INFINITY) {
    return new RuleError('between', GREATER_EQUAL, minArg);
  } else {
    return new RuleError('between', BETWEEN, minArg, maxArg);
  }
}

export default between as Rule;
