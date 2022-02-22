import { RuleError } from '@/modules/rule-error';
import { Rule } from '@/types';
import { ACCEPTED } from '@/types/error-cause';

function accepted(value: string): true | RuleError {
  if (value === 'checked') {
    return true;
  }

  return new RuleError('accepted', ACCEPTED);
}

export default accepted as Rule;
