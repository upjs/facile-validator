import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { EMAIL } from '@/types/error-cause';
import { emailRegex } from '@/utils/regex';

function email(value: string): true | RuleError {
  return emailRegex.test(value) || new RuleError('email', EMAIL);
}

export default email as Rule;
