import { Rule } from '../types';

function between(value: string, args: string): true | Error {
  const splittedArgs = args.split(',');

  if (splittedArgs.length !== 2) {
    throw new Error('between rule expects exactly two arguments');
  }

  const min = Number(splittedArgs[0]);
  const max = Number(splittedArgs[1]);

  if (Number.isNaN(min) || Number.isNaN(max)) {
    throw new Error('between rule expects two numbers as arguments');
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