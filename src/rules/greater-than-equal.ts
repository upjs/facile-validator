import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';
import { GREATER_EQUAL } from '@/types/error-cause';

function greaterThanEqual(value: string, args: string): true | RuleError {
  throwErrorIfArgsNotProvided(args, 'gte (greater-than-equal) rule expects exactly one argument');

  const min = Number(args);

  if (Number.isNaN(min)) {
    throw new Error('gte (greater-than-equal) rule expects a number as argument');
  }

  if (value !== '' && Number(value) >= min) {
    return true;
  }

  return new RuleError(GREATER_EQUAL, args);
}

export default greaterThanEqual as Rule;
