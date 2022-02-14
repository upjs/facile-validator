import ValidatorError from '../ValidatorError';

export default function (input: HTMLInputElement, args: string): true|ValidatorError {
  const splittedArgs = args.split(',');
  const min = parseInt(splittedArgs[0]);
  const max = parseInt(splittedArgs[1]);

  if (!isNaN(min) && !isNaN(max)) {
    const value = parseInt(input.value);
    if (!isNaN(value)) {
      if (value >= min && value <= max) {
        return true;
      }
    }
  }

  return new ValidatorError(
    `Please enter a number between ${min} and ${max}`,
    input
  );
}