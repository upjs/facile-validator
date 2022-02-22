import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorWhen } from '@/utils/checker';
import { SIZE_NUMBER, SIZE_STRING } from '@/types/error-cause';
import { MUST_NUMBER, MUST_POSITIVE, MUST_PROVIDED } from '@/types/error-dev';

function size(value: string, args = ''): true | RuleError {
  throwErrorWhen(args === '', MUST_PROVIDED);

  const [type, size] = args.split(',');

  const sizeInNumber = Number(size);
  throwErrorWhen(Number.isNaN(sizeInNumber), MUST_NUMBER);
  throwErrorWhen(type === 'string' && sizeInNumber < 0, MUST_POSITIVE);

  if (type === 'number') {
    return sizeForNumber(value, sizeInNumber);
  } else {
    return sizeForString(value, sizeInNumber);
  }
}

function sizeForNumber(value: string, size: number): true | RuleError {
  const valueInNumber = Number(value);
  if (!Number.isNaN(valueInNumber) && valueInNumber === size) {
    return true;
  }

  return new RuleError(SIZE_NUMBER, String(size));
}

function sizeForString(value: string, size: number): true | RuleError {
  if (value.length === size) {
    return true;
  }

  return new RuleError(SIZE_STRING, String(size));
}

export default size as Rule;
