import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import between from './between';
import { throwErrorWhen } from '@/utils/checker';
import { MUST_PROVIDED } from '@/types/error-dev';

function lessThanEqual(value: string, max = ''): true | RuleError {
  throwErrorWhen(max === '', MUST_PROVIDED);

  return between(value, `,${max}`);
}

export default lessThanEqual as Rule;
