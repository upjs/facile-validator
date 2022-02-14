export default class ValidatorError {

  constructor(public message: string) {
    new Error(message);
  }
}