import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { INTEGER } from '@/types/error-cause';
import { integer as integerRegex } from '@/utils/regex';

function int(value: string): true | RuleError {
  return integerRegex.test(value) || new RuleError(INTEGER);
}

export default int as Rule;
