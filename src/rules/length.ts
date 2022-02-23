import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorWhen } from '@/utils/helpers';
import { LENGTH } from '@/types/error-cause';
import { MUST_NUMBER, MUST_POSITIVE, MUST_PROVIDED } from '@/types/error-dev';

function length(value: string, length = ''): true | RuleError {
  throwErrorWhen(length === '', MUST_PROVIDED);

  const lengthInNumber = Number(length);
  throwErrorWhen(Number.isNaN(lengthInNumber), MUST_NUMBER);
  console.log(lengthInNumber, lengthInNumber <= 0);
  throwErrorWhen(lengthInNumber < 0, MUST_POSITIVE);

  return value.length === lengthInNumber || new RuleError(LENGTH, length);
}

export default length as Rule;
