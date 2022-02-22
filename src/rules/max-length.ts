import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorWhen } from '@/utils/helpers';
import { MAX_LENGTH } from '@/types/error-cause';
import { MUST_NUMBER, MUST_POSITIVE, MUST_PROVIDED } from '@/types/error-dev';

function maxLength(value: string, max = ''): true | RuleError {
  throwErrorWhen(max === '', MUST_PROVIDED);

  const maxInNumber = Number(max);
  throwErrorWhen(Number.isNaN(maxInNumber), MUST_NUMBER);
  throwErrorWhen(maxInNumber < 0, MUST_POSITIVE);

  return value.length <= maxInNumber || new RuleError(MAX_LENGTH, max);
}

export default maxLength as Rule;
