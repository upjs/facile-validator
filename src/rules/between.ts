import { Rule } from '../types';
import ValidatorError from '../ValidatorError';

function between(value: string, args: string): true | ValidatorError {
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
    return new ValidatorError(validatorErrorMessage);
  } else {
    if (valueInNumber >= min && valueInNumber <= max) {
      return true;
    } else {
      return new ValidatorError(validatorErrorMessage);
    }
  }

  
}

export default between as Rule;