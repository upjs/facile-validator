import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';
import { GREATER_EQUAL } from '@/types/error-cause';

function greaterThanEqual(value: string, args: string): true | RuleError {
  throwErrorIfArgsNotProvided(args, 'gte (greater-than-equal) rule expects exactly one argument');

  const max = Number(args);

  if (Number.isNaN(max)) {
    throw new Error('gte (greater-than-equal) rule expects a number as argument');
  }

  if (value !== '' && Number(value) >= max) {
    return true;
  }

  return new RuleError('greater-than-equal', GREATER_EQUAL, args);
}

export default greaterThanEqual as Rule;
