import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { number as numberRegex } from '@/utils/regex';
import { NUMBER } from '@/types/rules';

function number(value: string): true | RuleError {
  return numberRegex.test(value) || new RuleError(NUMBER);
}

export default number as Rule;
