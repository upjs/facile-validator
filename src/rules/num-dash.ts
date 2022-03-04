import { RuleError } from '@/modules/rule-error';
import { Rule } from '@/types';
import { numDash as numDashRegex } from '@/utils/regex';
import { NUM_DASH } from '@/types/error-cause';

function numDash(value: string): true | RuleError {
  return numDashRegex.test(value) || new RuleError(NUM_DASH);
}

export default numDash as Rule;
