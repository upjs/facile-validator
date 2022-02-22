import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { NUMBER } from '@/types/error-cause';

function number(value: string): true | RuleError {
  return String(Number(value)) === value || new RuleError(NUMBER);
}

export default number as Rule;
