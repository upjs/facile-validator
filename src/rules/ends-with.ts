import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { when } from '@/utils/helpers';
import { ENDS_WITH } from '@/types/error-cause';
import { MUST_PROVIDED } from '@/types/error-dev';

function endsWith(value: string, end = ''): true | RuleError {
  when(end === '').throwError(MUST_PROVIDED);

  return value.endsWith(end) || new RuleError(ENDS_WITH, end);
}

export default endsWith as Rule;
