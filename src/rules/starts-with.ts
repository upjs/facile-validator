import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { STARTS_WITH } from '@/types/error-cause';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';

function startsWith(value: string, args: string): true | RuleError {
  throwErrorIfArgsNotProvided(args, 'starts-with rule expects one argument');

  return value.startsWith(args) || new RuleError(STARTS_WITH, args);
}

export default startsWith as Rule;
