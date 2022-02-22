import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { SIZE_NUMBER, SIZE_STRING } from '@/types/error-cause';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';

function size(value: string, args: string): true | RuleError {
  throwErrorIfArgsNotProvided(args, 'size rule expects exactly one argument');

  const [type, size] = args.split(',');

  const sizeInNumber = Number(size);
  if (Number.isNaN(sizeInNumber) || (type === 'string' && sizeInNumber < 0)) {
    throw new Error('size rule expects a positive number as its argument');
  }

  if (type === 'number') {
    const valueInNumber = Number(value);
    if (!Number.isNaN(valueInNumber) && valueInNumber === sizeInNumber) {
      return true;
    }

    return new RuleError(SIZE_NUMBER, size);
  } else {
    if (value.length === sizeInNumber) {
      return true;
    }

    return new RuleError(SIZE_STRING, size);
  }
}

export default size as Rule;
