import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { when, processArgs } from '@/utils/helpers';
import { NOTIN } from '@/types/rules';
import { ARGUMENT_MUST_BE_PROVIDED } from '@/types/error-dev';

function notIn(value: string, values: string): true | RuleError {
  const [type, ...list] = processArgs(values);
  when(!type).throwError(ARGUMENT_MUST_BE_PROVIDED);

  if (type === 'array') {
    const splittedValue = processArgs(value);
    for (const value of splittedValue) {
      if (list.includes(value.trim())) {
        return new RuleError(NOTIN);
      }
    }

    return true;
  }

  return !list.includes(value.trim()) || new RuleError(NOTIN);
}

export default notIn as Rule;
