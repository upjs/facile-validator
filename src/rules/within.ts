import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { WITHIN } from '@/types/error-cause';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';

function within(value: string, args: string): true | RuleError {
  throwErrorIfArgsNotProvided(args, 'within rule expects at least one argument');

  const list = args.split(',');

  return list.includes(value) || new RuleError('within', WITHIN);
}

export default within as Rule;
