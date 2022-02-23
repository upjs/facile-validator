import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { between } from '@/rules';
import { throwErrorWhen } from '@/utils/helpers';
import { MUST_PROVIDED } from '@/types/error-dev';

function max(value: string, args = ''): true | RuleError {
  throwErrorWhen(args === '', MUST_PROVIDED);

  const [type, max = ''] = args.split(',');
  throwErrorWhen(max === '', MUST_PROVIDED);

  return between(value, `${type},,${max}`);
}

export default max as Rule;
