import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { between } from '@/rules';
import { throwErrorWhen } from '@/utils/helpers';
import { MUST_PROVIDED } from '@/types/error-dev';

function lessThanEqual(value: string, max = ''): true | RuleError {
  throwErrorWhen(max === '', MUST_PROVIDED);

  return between(value, `,${max}`);
}

export default lessThanEqual as Rule;
