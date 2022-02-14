import ValidatorError from '../ValidatorError';

export default function (input: HTMLInputElement): true|ValidatorError {
  if (input.value === String(Number(input.value))) {
    return true;
  }

  return new ValidatorError(`Please enter a valid number`, input);
}