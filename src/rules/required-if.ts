import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { getValue, processRule, throwErrorWhen } from '@/utils/helpers';
import { REQUIRED } from '@/types/error-cause';
import { MUST_PROVIDED } from '@/types/error-dev';
import { required } from '.';

function requiredIf(value: string, isFilled: string): true | RuleError {
  throwErrorWhen(isFilled === '', MUST_PROVIDED);

  if (isFilled === 'true') return true;

  return value.trim().length > 0 || new RuleError(REQUIRED);
}

export function replaceRequiredIfRule(rule: string): string {
  const { name: NAME, args: ARGS } = processRule(rule);

  if (ARGS.length === 0) return NAME;

  const field = document.getElementById(ARGS[0]);

  let hasValue: boolean | RuleError = true;
  if (field !== null) {
    const fieldValue = getValue(field as HTMLInputElement);
    hasValue = required(fieldValue);
  }

  return hasValue === true ? `${NAME}:true` : `${NAME}:false`;
}

export default requiredIf as Rule;
