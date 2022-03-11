import { RuleError } from '@/modules/rule-error';
import { Rule } from '@/types';
import { alpha as alphaRegex } from '@/utils/regex';
import { ALPHA } from '@/types/rules';

function alpha(value: string): true | RuleError {
  return alphaRegex.test(value) || new RuleError(ALPHA);
}

export default alpha as Rule;
