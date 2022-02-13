import ValidatorError from '../ValidatorError';

export default function (element: HTMLInputElement): true|ValidatorError {
  if (element.value.trim() === '') {
    return new ValidatorError('Input value is required', element);
  }

  return true;
}