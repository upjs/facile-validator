import { RuleError } from '@/modules/rule-error';
import { Rule } from '@/types';
import { ALPHA } from '@/types/error-cause';
import { alpha as alphaRegex } from '@/utils/regex';

function image(value: string): true | RuleError {
  console.log(value);
  return true;

  // return alphaRegex.test(value) || new RuleError('alpha', ALPHA);
}

export default image as Rule;
