import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { email as emailRegex } from '@/utils/regex';
import { EMAIL } from '@/types/error-cause';

function email(value: string): true | RuleError {
  return emailRegex.test(value) || new RuleError(EMAIL);
}

export default email as Rule;
