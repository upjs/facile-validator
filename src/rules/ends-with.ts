import { Rule } from '@/types';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';

function endsWith(value: string, args: string): true | Error {
  throwErrorIfArgsNotProvided(args, 'ends-with rule expects at least one argument');

  return value.endsWith(args) || new Error(`The value must ends with ${args}`);
}

export default endsWith as Rule;
