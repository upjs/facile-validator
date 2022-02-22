import { RuleError } from '@/modules/rule-error';
import { Rule } from '@/types';
import { ALPHA } from '@/types/error-cause';
import { alpha as alphaRegex } from '@/utils/regex';

function alpha(value: string): true | RuleError {
  return alphaRegex.test(value) || new RuleError(ALPHA);
}

export default alpha as Rule;
