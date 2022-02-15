import { describe, expect, it } from 'vitest';
import { startsWith } from '@/rules';

describe('rules: startsWith', () => {
  it('should accept value with correct input', () => {
    expect(startsWith('abc', 'abc')).toBe(true);
    expect(startsWith('abcdef', 'abc')).toBe(true);
  });

  it('should reject value with incorrect input', () => {
    expect(startsWith('abc', 'abcdef')).instanceOf(Error);
    expect(startsWith('abc', ' abc')).instanceOf(Error);
    expect(startsWith(' abc', 'abc')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => startsWith('abc')).toThrowError();
    expect(() => startsWith('abc', '')).toThrowError();
  });
});
