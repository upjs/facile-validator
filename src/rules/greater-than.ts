import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorWhen } from '@/utils/checker';
import { GREATER } from '@/types/error-cause';
import { MUST_NUMBER, MUST_PROVIDED } from '@/types/error-dev';

function greaterThan(value: string, min = ''): true | RuleError {
  throwErrorWhen(min === '', MUST_PROVIDED);

  const minNumber = Number(min);
  throwErrorWhen(Number.isNaN(minNumber), MUST_NUMBER);

  if (value !== '' && Number(value) > minNumber) {
    return true;
  }

  return new RuleError(GREATER, min);
}

export default greaterThan as Rule;
