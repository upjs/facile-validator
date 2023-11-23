import { describe, expect, it } from 'vitest';
import { notIn } from '@/rules';

describe('rules: not-in', () => {
  it('should accept value with correct input', () => {
    expect(notIn('abc', 'string,jkl')).toBe(true);
    expect(notIn('abc', 'string,jkl,abcd')).toBe(true);
    expect(notIn('def', 'string,abcdef')).toBe(true);
    expect(notIn('def', 'string,abcdef,jkl')).toBe(true);
    expect(notIn('ghi', 'string,efghijk')).toBe(true);
    expect(notIn('2', 'array,1,3')).toBe(true);
  });

  it('should reject value with incorrect input', () => {
    expect(notIn('abc', 'string,abc')).instanceOf(Error);
    expect(notIn('abc', 'string,abc,def')).instanceOf(Error);
    expect(notIn('def', 'string,abc,def')).instanceOf(Error);
    expect(notIn('def', 'string,abc,def,ghi')).instanceOf(Error);
    expect(notIn('ghi', 'string,abc,def,ghi')).instanceOf(Error);

    expect(notIn('1', 'array,1,3')).instanceOf(Error);
    expect(notIn('3', 'array,1,3')).instanceOf(Error);
    expect(notIn('1,3', 'array,1,3')).instanceOf(Error);
    expect(notIn('3,1', 'array,1,3')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => notIn('abc')).toThrowError();
    expect(() => notIn('abc', '')).toThrowError();
  });
});
