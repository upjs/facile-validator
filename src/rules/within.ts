import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { when } from '@/utils/helpers';
import { WITHIN } from '@/types/error-cause';
import { MUST_PROVIDED } from '@/types/error-dev';

function within(value: string, values: string): true | RuleError {
  when(values === '').throwError(MUST_PROVIDED);

  const list = values.split(',');
  return list.includes(value) || new RuleError(WITHIN);
}

export default within as Rule;
