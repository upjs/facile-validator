import { Rule } from '@/types';
import { int as isInteger } from '@/rules';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';

function digits(value: string, digitLength: string): true | Error {
  throwErrorIfArgsNotProvided(digitLength, 'digits rule expects one argument');

  if (isInteger(digitLength) !== true || +digitLength < 1) {
    throw new Error('digit length must be specified as an integer');
  }

  const regex = new RegExp(`^-?[0-9]{${digitLength}}$`);

  return regex.test(value) ? true : new Error(`The value must be a ${digitLength}-digits number`);
}

export default digits as Rule;
