import * as causes from '@/types/error-cause';

export default {
  [causes.ACCEPTED]: 'Please accept this field',
  [causes.MAX_LENGTH]: 'Max length is $1',
  [causes.MIN_LENGTH]: 'Min length is $1',
  [causes.NUMBER]: 'Please enter a valid number',
  [causes.BETWEEN]: 'Please enter a number between $1 and $2',
  [causes.GREATER]: 'Please enter a number greater than $1',
  [causes.GREATER_EQUAL]: 'Please enter a number greater than or equal to $1',
  [causes.LESS]: 'Please enter a number less than $1',
  [causes.LESS_EQUAL]: 'Please enter a number less than or equal to $1',
  [causes.DIGITS]: 'The value must be a $1-digits number',
  [causes.EMAIL]: 'Please enter a valid email address',
  [causes.STARTS_WITH]: 'The value must start with "$1"',
  [causes.ENDS_WITH]: 'The value must ends with "$1"',
  [causes.INTEGER]: 'The value must be a valid integer',
  [causes.REQUIRED]: 'This field is required',
  [causes.REQUIRED_IF]: 'This field is required when $1 field is present',
  [causes.WITHIN]: 'The value is incorrect',
  [causes.ALPHA]: 'Please enter only alphabetic characters',
  [causes.SIZE_NUMBER]: 'The value must be equal to $1',
  [causes.SIZE_STRING]: 'The value must have $1 characters',
};
