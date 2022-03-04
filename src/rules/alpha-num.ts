import { RuleError } from '@/modules/rule-error';
import { Rule } from '@/types';
import { alphaNum as alphaNumRegex } from '@/utils/regex';
import { ALPHA_NUM } from '@/types/error-cause';

function alphaNum(value: string): true | RuleError {
  return alphaNumRegex.test(value) || new RuleError(ALPHA_NUM);
}

export default alphaNum as Rule;
