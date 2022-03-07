import { describe, expect, it } from 'vitest';
import { within } from '@/rules';

describe('rules: within', () => {
  it('should accept value with correct input', () => {
    expect(within('abc', 'string,abc')).toBe(true);
    expect(within('abc', 'string,abc,def')).toBe(true);
    expect(within('def', 'string,abc,def')).toBe(true);
    expect(within('def', 'string,abc,def,ghi')).toBe(true);
    expect(within('ghi', 'string,abc,def,ghi')).toBe(true);

    expect(within('1', 'array,1,3')).toBe(true);
    expect(within('3', 'array,1,3')).toBe(true);
    expect(within('1,3', 'array,1,3')).toBe(true);
    expect(within('3,1', 'array,1,3')).toBe(true);
    expect(within('', 'array,')).toBe(true);
  });

  it('should reject value with incorrect input', () => {
    expect(within('abc', 'string,jkl')).instanceOf(Error);
    expect(within('abc', 'string,jkl,abcd')).instanceOf(Error);
    expect(within('def', 'string,abcdef')).instanceOf(Error);
    expect(within('def', 'string,abcdef,jkl')).instanceOf(Error);
    expect(within('ghi', 'string,efghijk')).instanceOf(Error);

    expect(within('1,2', 'array,1,3')).instanceOf(Error);
    expect(within('2', 'array,1,3')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => within('abc')).toThrowError();
    expect(() => within('abc', '')).toThrowError();
  });
});
