import { RuleError } from '@/modules/rule-error';
import { Rule } from '@/types';
import { REQUIRED } from '@/types/error-cause';
import { throwErrorIfArgsNotProvided } from '@/utils/checker';

function requiredIf(value: string, isRequired: string): true | RuleError {
  throwErrorIfArgsNotProvided(isRequired, 'required-if rule expects a field id as argument');

  if (isRequired === 'false') return true;

  return value.trim().length > 0 || new RuleError(REQUIRED);
}

export default requiredIf as Rule;
