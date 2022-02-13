import ValidatorError from "../ValidatorError";

export default function (element: HTMLInputElement): true|ValidatorError {
  const input = document.createElement('input');
  input.type = 'email';
  input.required = true;
  input.value = element.value;

  const result = typeof input.checkValidity === 'function'
    ? input.checkValidity()
    : /\S+@\S+\.\S+/.test(element.value);

  if (result === true) {
    return true;
  }

  return new ValidatorError(`Please enter a valid email`, element);
}