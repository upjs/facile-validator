import { RuleError } from '@/modules/rule-error';
import { Rule } from '@/types';
import { alphaNumDash as alphaNumDashRegex } from '@/utils/regex';
import { ALPHA_NUM_DASH } from '@/types/error-cause';

function alphaNumDash(value: string): true | RuleError {
  return alphaNumDashRegex.test(value) || new RuleError(ALPHA_NUM_DASH);
}

export default alphaNumDash as Rule;
