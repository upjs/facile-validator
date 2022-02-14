import { Rule } from '../types';
import {integerRegex} from '../utils/regex';

function int(value: string): true | Error {
  return integerRegex.test(value) || new Error('The value must be a valid integer');
}

export default int as Rule;