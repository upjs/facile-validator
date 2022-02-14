import { Rule } from '../types';

function max(value: string, max: string): true | Error {
  const maxInNumber = Number(max);

  if (Number.isNaN(maxInNumber)) {
    throw new Error('max rule expects a number as argument');
  }

  return value.length <= maxInNumber || new Error(`Max length is ${max}`);
}

export default max as Rule;
