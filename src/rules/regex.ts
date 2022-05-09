import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { REQUIRED } from '@/types/rules';
import { when } from '@/utils/helpers';
import { ARGUMENT_MUST_BE_A_NUMBER, ARGUMENT_MUST_BE_PROVIDED } from '@/types/error-dev';

const stringToRegex = (str: string) => {
  // Main regex
  const main = str.match(/\/(.+)\/.*/)?.[1] ?? '';

  // Regex options
  const options = str.match(/\/.+\/(.*)/)?.[1] ?? '';

  // Compiled regex
  return new RegExp(main, options);
};

function required(value: string, pattern: string): true | RuleError {
  when(!pattern).throwError(ARGUMENT_MUST_BE_PROVIDED);
  const regExp = stringToRegex(pattern);

  return regExp.test(value) || new RuleError('ssd');
}

export default required as Rule;
