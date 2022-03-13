import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { when, processArgs } from '@/utils/helpers';
import { ARGUMENT_MUST_BE_A_NUMBER, ARGUMENT_MUST_BE_POSITIVE, ARGUMENT_MUST_BE_PROVIDED } from '@/types/error-dev';
import { GREATER_EQUAL, MIN_LENGTH } from '@/types/rules';

function min(value: string, args = ''): true | RuleError {
  const [type, min] = processArgs(args);
  when(!type).throwError(ARGUMENT_MUST_BE_PROVIDED);
  when(!min).throwError(ARGUMENT_MUST_BE_PROVIDED);

  const minInNumber = Number(min);
  when(Number.isNaN(minInNumber)).throwError(ARGUMENT_MUST_BE_A_NUMBER);

  if (type === 'number') {
    return minForNumber(value, minInNumber);
  } else {
    return minForString(value, minInNumber);
  }
}

function minForNumber(value: string, min: number) {
  const valueInNumber = Number(value);
  if (value !== '' && !Number.isNaN(valueInNumber) && valueInNumber >= min) {
    return true;
  }

  return new RuleError(GREATER_EQUAL, String(min));
}

function minForString(value: string, min: number) {
  when(min < 0).throwError(ARGUMENT_MUST_BE_POSITIVE);

  if (value.length >= min) {
    return true;
  }

  return new RuleError(MIN_LENGTH, String(min));
}

export default min as Rule;
