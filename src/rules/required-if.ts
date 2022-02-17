import { RuleError } from '@/modules/rule-error';
import { Rule } from '@/types';
import { ACCEPTED } from '@/types/error-cause';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';

function accepted(value: string, otherElement: string): true | RuleError {
  throwErrorIfArgsNotProvided(otherElement, 'required-if rule expect exactly one arguments');

  return new RuleError('accepted', ACCEPTED);
}

export default accepted as Rule;
