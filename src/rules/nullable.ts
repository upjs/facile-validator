import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';

function nullable(value: string): true | RuleError {
  return true;
}

export default nullable as Rule;
