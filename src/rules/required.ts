import { RuleError } from '@/modules/rule-error';
import { Rule } from '@/types';
import { REQUIRED } from '@/types/error-cause';

function required(value: string): true | RuleError {
  return value.trim().length > 0 || new RuleError('required', REQUIRED);
}

export default required as Rule;
