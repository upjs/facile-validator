import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { MIN_LENGTH } from '@/types/error-cause';

function minLength(value: string, min: string): true | RuleError {
  const minInNumber = Number(min);

  if (min === '' || Number.isNaN(minInNumber)) {
    throw new Error('min rule expects a number as argument');
  }

  if (minInNumber < 0) {
    throw new Error('min rule expects a positive number as argument');
  }

  return value.length >= minInNumber || new RuleError('min-length', MIN_LENGTH, min);
}

export default minLength as Rule;
