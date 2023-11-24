import { expect, it } from 'vitest';
import { processArgs } from '@/utils/helpers';

it('should process args correctly', () => {
  expect(processArgs('')).toEqual([]);
  expect(processArgs('arg1')).toEqual(['arg1']);
  expect(processArgs('arg1,arg2')).toEqual(['arg1', 'arg2']);
  expect(processArgs(',arg2')).toEqual(['', 'arg2']);
  expect(processArgs('arg1,')).toEqual(['arg1', '']);
  expect(processArgs(String(/^([0-9]{5})-([0-9]{5})$/))).toEqual(['/^([0-9]{5})-([0-9]{5})$/']);
});
