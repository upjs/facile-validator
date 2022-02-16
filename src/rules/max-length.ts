import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { MAX_LENGTH } from '@/types/error-cause';

function maxLength(value: string, max: string): true | RuleError {
  const maxInNumber = Number(max);

  if (max === '' || Number.isNaN(maxInNumber)) {
    throw new Error('max rule expects a number as argument');
  }

  if (maxInNumber < 0) {
    throw new Error('max rule expects a positive number as argument');
  }

  return value.length <= maxInNumber || new RuleError('max-length', MAX_LENGTH, max);
}

export default maxLength as Rule;
