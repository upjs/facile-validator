import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';
import { LESS } from '@/types/error-cause';

function lessThan(value: string, args: string): true | RuleError {
  throwErrorIfArgsNotProvided(args, 'lt (less-than) rule expects exactly one argument');

  const max = Number(args);

  if (Number.isNaN(max)) {
    throw new Error('lt (less-than) rule expects a number as argument');
  }

  if (value !== '' && Number(value) < max) {
    return true;
  }

  return new RuleError('less-than', LESS, args);
}

export default lessThan as Rule;
