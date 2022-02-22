import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { ACCEPTED } from '@/types/error-cause';

function accepted(value: string): true | RuleError {
  if (value === 'checked') {
    return true;
  }

  return new RuleError(ACCEPTED);
}

export default accepted as Rule;
