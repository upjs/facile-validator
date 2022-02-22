import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorWhen } from '@/utils/checker';
import { MIN_LENGTH } from '@/types/error-cause';
import { MUST_NUMBER, MUST_POSITIVE, MUST_PROVIDED } from '@/types/error-dev';

function minLength(value: string, min = ''): true | RuleError {
  throwErrorWhen(min === '', MUST_PROVIDED);

  const minInNumber = Number(min);
  throwErrorWhen(Number.isNaN(minInNumber), MUST_NUMBER);
  throwErrorWhen(minInNumber < 0, MUST_POSITIVE);

  return value.length >= minInNumber || new RuleError(MIN_LENGTH, min);
}

export default minLength as Rule;
