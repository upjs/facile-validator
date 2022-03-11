import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorWhen } from '@/utils/helpers';
import { STARTS_WITH } from '@/types/rules';
import { ARGUMENT_MUST_BE_PROVIDED } from '@/types/error-dev';

function startsWith(value: string, start = ''): true | RuleError {
  throwErrorWhen(start === '', ARGUMENT_MUST_BE_PROVIDED);

  return value.startsWith(start) || new RuleError(STARTS_WITH, start);
}

export default startsWith as Rule;
