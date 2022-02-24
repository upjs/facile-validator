import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorWhen } from '@/utils/helpers';
import { MUST_NUMBER, MUST_POSITIVE, MUST_PROVIDED } from '@/types/error-dev';
import { EQUAL_LENGTH, EQUAL_NUMBER } from '@/types/error-cause';

function size(value: string, args = ''): true | RuleError {
  throwErrorWhen(args === '', MUST_PROVIDED);

  const [type, size] = args.split(',');
  throwErrorWhen(!size, MUST_PROVIDED);

  const sizeInNumber = Number(size);
  throwErrorWhen(Number.isNaN(sizeInNumber), MUST_NUMBER);

  if (type === 'number') {
    return sizeForNumber(value, sizeInNumber);
  } else {
    return sizeForString(value, sizeInNumber);
  }
}

function sizeForNumber(value: string, size: number) {
  const valueInNumber = Number(value);
  if (value !== '' && !Number.isNaN(valueInNumber) && valueInNumber === size) {
    return true;
  }

  return new RuleError(EQUAL_NUMBER, String(size));
}

function sizeForString(value: string, size: number) {
  throwErrorWhen(size < 0, MUST_POSITIVE);

  if (value.length === size) {
    return true;
  }

  return new RuleError(EQUAL_LENGTH, String(size));
}

export default size as Rule;
