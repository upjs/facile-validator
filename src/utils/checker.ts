export function throwErrorIfArgsNotProvided(value: string, message: string): void {
  if (typeof value === 'undefined' || value === null || value === '') {
    throw new Error(message);
  }
}
