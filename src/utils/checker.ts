export function throwErrorIfArgsNotProvided(args: string, message: string): void {
  if (typeof args === 'undefined' || args === null || args === '') {
    throw new Error(message);
  }
}
