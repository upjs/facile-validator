import * as rules from '@/types/rules';
import { LangKeys } from '@/types';

const enLang: Record<LangKeys, string> = {
  [rules.ACCEPTED]: 'Please accept this field',
  [rules.ALPHA]: 'Please enter only alphabetic characters',
  [rules.ALPHA_NUM]: 'Please enter only alpha-numeric characters',
  [rules.ALPHA_NUM_DASH]: 'Please enter only alpha-numeric characters, dashes, and underscores',
  [rules.BETWEEN_LENGTH]: 'The value must have between $1 and $2 characters',
  [rules.BETWEEN_NUMBER]: 'Please enter a number between $1 and $2',
  [rules.DIGITS]: 'The value must be a $1-digits number',
  [rules.EMAIL]: 'Please enter a valid email address',
  [rules.ENDS_WITH]: 'The value must ends with "$1"',
  [rules.EQUAL_LENGTH]: 'The value must have $1 characters',
  [rules.EQUAL_NUMBER]: 'The value must be equal to $1',
  [rules.GREATER_EQUAL]: 'Please enter a number greater than or equal to $1',
  [rules.INTEGER]: 'The value must be a valid integer',
  [rules.LESS_EQUAL]: 'Please enter a number less than or equal to $1',
  [rules.MAX_LENGTH]: 'Max length is $1',
  [rules.MIN_LENGTH]: 'Min length is $1',
  [rules.NUM_DASH]: 'Please enter numbers with dashes and underscores',
  [rules.NUMBER]: 'Please enter a valid number',
  [rules.REGEX]: "The value doesn't match the pattern",
  [rules.REQUIRED]: 'This field is required',
  [rules.STARTS_WITH]: 'The value must start with "$1"',
  [rules.WITHIN]: 'The value is incorrect',
};

export default enLang;
