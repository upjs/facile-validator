import { Rule } from '@/types';

function between(value: string, args: string): true | Error {
  if (args === '') {
    throw new Error('between rule expects at least one argument');
  }

  const splittedArgs = args.split(',');

  const min = splittedArgs[0] === '' ? Number.NEGATIVE_INFINITY : Number(splittedArgs[0]);
  const max = splittedArgs[1] === '' ? Number.POSITIVE_INFINITY : Number(splittedArgs[1]);

  if (Number.isNaN(min) || Number.isNaN(max)) {
    throw new Error('between rule expects two numbers as arguments');
  }

  if (min > max) {
    throw new Error('between rule expects first argument to be less than or equal to second argument');
  }

  const valueInNumber = Number(value);
  const validatorErrorMessage = `Please enter a number between ${min} and ${max}`;

  if (Number.isNaN(valueInNumber)) {
    return new Error(validatorErrorMessage);
  }

  if (valueInNumber >= min && valueInNumber <= max) {
    return true;
  }

  return new Error(validatorErrorMessage);
}

export default between as Rule;
