import { describe, expect, it } from 'vitest';
import { endsWith } from '@/rules';

describe('rules: ends-with', () => {
  it('should accept value with correct input', () => {
    expect(endsWith('abc', 'abc')).toBe(true);
    expect(endsWith('abcdef', 'def')).toBe(true);
  });

  it('should reject value with incorrect input', () => {
    expect(endsWith('abc', 'abcdef')).instanceOf(Error);
    expect(endsWith('def', 'abcdef')).instanceOf(Error);
    expect(endsWith('abc ', ' abc')).instanceOf(Error);
    expect(endsWith('abc', 'abc ')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => endsWith('abc')).toThrowError();
    expect(() => endsWith('abc', '')).toThrowError();
  });
});
