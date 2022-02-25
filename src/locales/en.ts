import * as causes from '@/types/error-cause';
import { LangKeys } from '@/types';

const enLang: Record<LangKeys, string> = {
  [causes.ACCEPTED]: 'Please accept this field',
  [causes.ALPHA]: 'Please enter only alphabetic characters',
  [causes.ALPHA_NUM_DASH]: 'Please enter only alpha-numeric characters, dashes, and underscores',
  [causes.BETWEEN_LENGTH]: 'The value must have between $1 and $2 characters',
  [causes.BETWEEN_NUMBER]: 'Please enter a number between $1 and $2',
  [causes.DIGITS]: 'The value must be a $1-digits number',
  [causes.EMAIL]: 'Please enter a valid email address',
  [causes.ENDS_WITH]: 'The value must ends with "$1"',
  [causes.EQUAL_LENGTH]: 'The value must have $1 characters',
  [causes.EQUAL_NUMBER]: 'The value must be equal to $1',
  [causes.GREATER_EQUAL]: 'Please enter a number greater than or equal to $1',
  [causes.INTEGER]: 'The value must be a valid integer',
  [causes.LESS_EQUAL]: 'Please enter a number less than or equal to $1',
  [causes.MAX_LENGTH]: 'Max length is $1',
  [causes.MIN_LENGTH]: 'Min length is $1',
  [causes.NUMBER]: 'Please enter a valid number',
  [causes.REQUIRED]: 'This field is required',
  [causes.STARTS_WITH]: 'The value must start with "$1"',
  [causes.WITHIN]: 'The value is incorrect',
};

export default enLang;
