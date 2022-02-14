import { Rule } from '../types';
import {emailRegex} from '../utils/regex';

function email (value: string): true | Error {
  return emailRegex.test(value) || new Error('Please enter a valid email');
}

export default email as Rule;