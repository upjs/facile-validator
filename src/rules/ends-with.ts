import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorWhen } from '@/utils/checker';
import { ENDS_WITH } from '@/types/error-cause';
import { MUST_PROVIDED } from '@/types/error-dev';

function endsWith(value: string, end = ''): true | RuleError {
  throwErrorWhen(end === '', MUST_PROVIDED);

  return value.endsWith(end) || new RuleError(ENDS_WITH, end);
}

export default endsWith as Rule;
