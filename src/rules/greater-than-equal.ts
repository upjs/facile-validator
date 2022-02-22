import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import between from './between';
import { throwErrorWhen } from '@/utils/helpers';
import { MUST_PROVIDED } from '@/types/error-dev';

function greaterThanEqual(value: string, min = ''): true | RuleError {
  throwErrorWhen(min === '', MUST_PROVIDED);

  return between(value, `${min},`);
}

export default greaterThanEqual as Rule;
