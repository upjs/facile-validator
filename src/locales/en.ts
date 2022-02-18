import * as causes from '@/types/error-cause';

export default {
  [causes.ACCEPTED]: 'Please accept this field',
  [causes.MAX_LENGTH]: 'Max length is $1',
  [causes.MIN_LENGTH]: 'Min length is $1',
  [causes.NUMBER]: 'Please enter a valid number',
  [causes.BETWEEN]: 'Please enter a number between $1 and $2',
  [causes.GREATER_EQUAL]: 'Please enter a number greater than or equal to $1',
  [causes.LESS_EQUAL]: 'Please enter a number less than or equal to $1',
  [causes.DIGITS]: 'The value must be a $1-digits number',
  [causes.EMAIL]: 'Please enter a valid email address',
  [causes.STARTS_WITH]: 'The value must start with "$1"',
  [causes.ENDS_WITH]: 'The value must ends with "$1"',
  [causes.INTEGER]: 'The value must be a valid integer',
  [causes.REQUIRED]: 'This field is required',
  [causes.WITHIN]: 'The value is incorrect',
  [causes.ALPHA]: 'Please enter only alphabetic characters',
};
