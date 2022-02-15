import { Rule } from '@/types';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';

function within(value: string, args: string): true | Error {
  throwErrorIfArgsNotProvided(args, 'within rule expects at least one argument');

  const list = args.split(',');

  return list.includes(value) || new Error('The value must be a valid integer');
}

export default within as Rule;
