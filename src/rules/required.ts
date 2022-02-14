import { Rule } from '../types';

function required(value: string): true | Error {
  return value.trim().length > 0 || new Error('Required');
}

export default required as Rule;