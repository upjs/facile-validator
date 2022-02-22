export function throwErrorIfArgsNotProvided(args: string, message: string): void {
  if (typeof args === 'undefined' || args === null || args === '') {
    throw new Error(message);
  }
}

export function throwErrorWhen(condition: boolean, message: string): void {
  if (condition) {
    throw new Error(message);
  }
}
