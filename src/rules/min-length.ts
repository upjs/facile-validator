import { Rule } from '@/types';

function min(value: string, min: string): true | Error {
  const minInNumber = Number(min);

  if (min === '' || Number.isNaN(minInNumber)) {
    throw new Error('min rule expects a number as argument');
  }

  if (minInNumber < 0) {
    throw new Error('min rule expects a positive number as argument');
  }

  return value.length >= minInNumber || new Error(`Min length is ${min}`);
}

export default min as Rule;
