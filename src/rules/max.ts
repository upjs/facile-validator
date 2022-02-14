import { Rule } from '@/types';

function max(value: string, max: string): true | Error {
  const maxInNumber = Number(max);

  if (max === '' || Number.isNaN(maxInNumber)) {
    throw new Error('max rule expects a number as argument');
  }

  if (maxInNumber < 0) {
    throw new Error('min rule expects a positive number as argument');
  }

  return value.length <= maxInNumber || new Error(`Max length is ${max}`);
}

export default max as Rule;
