import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { required } from '@/rules';

function requiredIf(value: string, targetValue = ''): true | RuleError {
  const isTargetValueProvided = required(targetValue);

  if (isTargetValueProvided === true) {
    return required(value);
  }

  return true;
}

export default requiredIf as Rule;
