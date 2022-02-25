import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { int as isInteger } from '@/rules';
import { when } from '@/utils/helpers';
import { DIGITS } from '@/types/error-cause';
import { MUST_INTEGER, MUST_PROVIDED } from '@/types/error-dev';

function digits(value: string, digitLength = ''): true | RuleError {
  when(digitLength === '').throwError(MUST_PROVIDED);
  when(isInteger(digitLength) !== true || +digitLength < 1).throwError(MUST_INTEGER);

  const regex = new RegExp(`^-?[0-9]{${digitLength}}$`);

  return regex.test(value) ? true : new RuleError(DIGITS, digitLength);
}

export default digits as Rule;
