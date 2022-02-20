import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';
import { LESS_EQUAL } from '@/types/error-cause';

function lessThanEqual(value: string, args: string): true | RuleError {
  throwErrorIfArgsNotProvided(args, 'lte (less-than-equal) rule expects exactly one argument');

  const min = Number(args);

  if (Number.isNaN(min)) {
    throw new Error('lte (less-than-equal) rule expects a number as argument');
  }

  if (value !== '' && Number(value) <= min) {
    return true;
  }

  return new RuleError('less-than-equal', LESS_EQUAL, args);
}

export default lessThanEqual as Rule;
