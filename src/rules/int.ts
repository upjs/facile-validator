import ValidatorError from '../ValidatorError';

export default function (input: HTMLInputElement): true|ValidatorError {
  if (/^[0-9]+$/.test(input.value)) {
    return true;
  }

  return new ValidatorError(`The value must be a valid integer`, input);
}