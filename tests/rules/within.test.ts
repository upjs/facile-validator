import { describe, expect, it } from 'vitest';
import { within } from '@/rules';

describe('rules: within', () => {
  it('should accept value with correct input', () => {
    expect(within('abc', 'abc')).toBe(true);
    expect(within('abc', 'abc,def')).toBe(true);
    expect(within('def', 'abc,def')).toBe(true);
    expect(within('def', 'abc,def,ghi')).toBe(true);
    expect(within('ghi', 'abc,def,ghi')).toBe(true);
  });

  it('should reject value with incorrect input', () => {
    expect(within('abc', 'jkl')).instanceOf(Error);
    expect(within('abc', 'jkl,abcd')).instanceOf(Error);
    expect(within('def', 'abcdef')).instanceOf(Error);
    expect(within('def', 'abcdef,jkl')).instanceOf(Error);
    expect(within('ghi', 'efghijk')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => within('abc')).toThrowError();
    expect(() => within('abc', '')).toThrowError();
  });
});
