import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { when } from '@/utils/helpers';
import { WITHIN } from '@/types/error-cause';
import { ARGUMENT_MUST_BE_PROVIDED } from '@/types/error-dev';

function within(value: string, values: string): true | RuleError {
  when(values === '').throwError(ARGUMENT_MUST_BE_PROVIDED);

  const [type, ...list] = values.split(',');

  if (type === 'array') {
    const splittedValue = value.split(',');
    for (const value of splittedValue) {
      if (!list.includes(value)) {
        return new RuleError(WITHIN);
      }
    }

    return true;
  }

  return list.includes(value) || new RuleError(WITHIN);
}

export default within as Rule;
