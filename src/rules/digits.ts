import { Rule } from '@/types';
import { int as isInteger } from '@/rules';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';
import { RuleError } from '@/modules/rule-error';
import { DIGITS } from '@/types/error-cause';

function digits(value: string, digitLength: string): true | RuleError {
  throwErrorIfArgsNotProvided(digitLength, 'digits rule expects one argument');

  if (isInteger(digitLength) !== true || +digitLength < 1) {
    throw new Error('digit length must be specified as an integer');
  }

  const regex = new RegExp(`^-?[0-9]{${digitLength}}$`);

  return regex.test(value) ? true : new RuleError('digits', DIGITS, digitLength);
}

export default digits as Rule;
