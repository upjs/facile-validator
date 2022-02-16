import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { ENDS_WITH } from '@/types/error-cause';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';

function endsWith(value: string, args: string): true | RuleError {
  throwErrorIfArgsNotProvided(args, 'ends-with rule expects one argument');

  return value.endsWith(args) || new RuleError('ends-with', ENDS_WITH, args);
}

export default endsWith as Rule;
