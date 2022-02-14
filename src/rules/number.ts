import { Rule } from '@/types';

function number(value: string): true | Error {
  return String(Number(value)) === value || new Error('Please enter a valid number');
}

export default number as Rule;
