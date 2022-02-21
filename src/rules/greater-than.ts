import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';
import { GREATER } from '@/types/error-cause';

function greaterThanEqual(value: string, args: string): true | RuleError {
  throwErrorIfArgsNotProvided(args, 'gt (greater-than) rule expects exactly one argument');

  const max = Number(args);

  if (Number.isNaN(max)) {
    throw new Error('gt (greater-than) rule expects a number as argument');
  }

  if (value !== '' && Number(value) > max) {
    return true;
  }

  return new RuleError('greater-than', GREATER, args);
}

export default greaterThanEqual as Rule;
