import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { between } from '@/rules';
import { throwErrorWhen } from '@/utils/helpers';
import { MUST_PROVIDED } from '@/types/error-dev';

function min(value: string, args = ''): true | RuleError {
  throwErrorWhen(args === '', MUST_PROVIDED);

  const [type, min = ''] = args.split(',');
  throwErrorWhen(min === '', MUST_PROVIDED);

  return between(value, `${type},${min},`);
}

export default min as Rule;
