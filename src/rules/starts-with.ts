import { Rule } from '@/types';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';

function startsWith(value: string, args: string): true | Error {
  throwErrorIfArgsNotProvided(args, 'starts-with rule expects at least one argument');

  return value.startsWith(args) || new Error(`The value must starts with ${args}`);
}

export default startsWith as Rule;
