import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorWhen } from '@/utils/helpers';
import { LESS } from '@/types/error-cause';
import { MUST_NUMBER, MUST_PROVIDED } from '@/types/error-dev';

function lessThan(value: string, max = ''): true | RuleError {
  throwErrorWhen(max === '', MUST_PROVIDED);

  const maxNumber = Number(max);
  throwErrorWhen(Number.isNaN(maxNumber), MUST_NUMBER);

  if (value !== '' && Number(value) < maxNumber) {
    return true;
  }

  return new RuleError(LESS, max);
}

export default lessThan as Rule;
