import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { integer as integerRegex } from '@/utils/regex';
import { INTEGER } from '@/types/rules';

function int(value: string): true | RuleError {
  return integerRegex.test(value) || new RuleError(INTEGER);
}

export default int as Rule;
