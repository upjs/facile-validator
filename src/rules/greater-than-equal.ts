import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import between from './between';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';

function greaterThanEqual(value: string, args: string): true | RuleError {
  throwErrorIfArgsNotProvided(args, 'gte (greater-than-equal) rule expects exactly one argument');

  return between(value, `${args},`);
}

export default greaterThanEqual as Rule;
