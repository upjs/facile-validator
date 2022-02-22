import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { throwErrorWhen } from '@/utils/checker';
import { REQUIRED } from '@/types/error-cause';
import { MUST_PROVIDED } from '@/types/error-dev';

function requiredIf(value: string, isRequired: string): true | RuleError {
  throwErrorWhen(isRequired === '', MUST_PROVIDED);

  if (isRequired === 'false') return true;

  return value.trim().length > 0 || new RuleError(REQUIRED);
}

export default requiredIf as Rule;
