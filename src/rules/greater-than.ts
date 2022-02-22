import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';
import { GREATER } from '@/types/error-cause';

function greaterThan(value: string, args: string): true | RuleError {
  throwErrorIfArgsNotProvided(args, 'gt (greater-than) rule expects exactly one argument');

  const min = Number(args);

  if (Number.isNaN(min)) {
    throw new Error('gt (greater-than) rule expects a number as argument');
  }

  if (value !== '' && Number(value) > min) {
    return true;
  }

  return new RuleError(GREATER, args);
}

export default greaterThan as Rule;
