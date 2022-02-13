import ValidatorError from "../ValidatorError";

export default function (element: HTMLInputElement, value: any): true|ValidatorError {
  if (element.value.length < parseInt(value)) {
    return new ValidatorError(`Min length is ${value}`, element);
  }

  return true;
}