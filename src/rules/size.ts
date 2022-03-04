import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { when } from '@/utils/helpers';
import { ARGUMENT_MUST_BE_A_NUMBER, ARGUMENT_MUST_BE_POSITIVE, ARGUMENT_MUST_BE_PROVIDED } from '@/types/error-dev';
import { EQUAL_LENGTH, EQUAL_NUMBER } from '@/types/error-cause';

function size(value: string, args = ''): true | RuleError {
  when(args === '').throwError(ARGUMENT_MUST_BE_PROVIDED);

  const [type, size] = args.split(',');
  when(!size).throwError(ARGUMENT_MUST_BE_PROVIDED);

  const sizeInNumber = Number(size);
  when(Number.isNaN(sizeInNumber)).throwError(ARGUMENT_MUST_BE_A_NUMBER);

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
  when(size < 0).throwError(ARGUMENT_MUST_BE_POSITIVE);

  if (value.length === size) {
    return true;
  }

  return new RuleError(EQUAL_LENGTH, String(size));
}

export default size as Rule;