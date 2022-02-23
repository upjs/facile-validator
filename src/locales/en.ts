import * as causes from '@/types/error-cause';
import { LangKeys } from '@/types';

export default {
  [causes.ACCEPTED]: 'Please accept this field',
  [causes.ALPHA]: 'Please enter only alphabetic characters',
  [causes.BETWEEN]: 'Please enter a number between $1 and $2',
  [causes.DIGITS]: 'The value must be a $1-digits number',
  [causes.EMAIL]: 'Please enter a valid email address',
  [causes.ENDS_WITH]: 'The value must ends with "$1"',
  [causes.EQUAL]: 'The value must be equal to $1',
  [causes.GREATER]: 'Please enter a number greater than $1',
  [causes.GREATER_EQUAL]: 'Please enter a number greater than or equal to $1',
  [causes.INTEGER]: 'The value must be a valid integer',
  [causes.LENGTH]: 'The value must have $1 characters',
  [causes.LESS]: 'Please enter a number less than $1',
  [causes.LESS_EQUAL]: 'Please enter a number less than or equal to $1',
  [causes.MAX_LENGTH]: 'Max length is $1',
  [causes.MIN_LENGTH]: 'Min length is $1',
  [causes.NUMBER]: 'Please enter a valid number',
  [causes.REQUIRED]: 'This field is required',
  [causes.REQUIRED_IF]: 'This field is required when $1 field is present',
  [causes.STARTS_WITH]: 'The value must start with "$1"',
  [causes.WITHIN]: 'The value is incorrect',
} as Record<LangKeys, string>;
