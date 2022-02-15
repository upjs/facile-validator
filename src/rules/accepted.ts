import { Rule } from '@/types';

function accepted(value: string): true | Error {
  if (value === 'true') {
    return true;
  }

  return new Error('Please accept this input');
}

export default accepted as Rule;
