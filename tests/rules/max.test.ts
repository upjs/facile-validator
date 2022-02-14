import { describe, expect, it } from 'vitest';
import { max } from '@/rules';

describe('rules: max', () => {
  it('should accept value with correct input', () => {
    expect(max('abc', '4')).toBe(true);
    expect(max('abc', '5')).toBe(true);
    expect(max('another', '10')).toBe(true);
    expect(max('equal', '5')).toBe(true);
    expect(max('text with space', '15')).toBe(true);
  });

  it('should reject value with incorrect input', () => {
    expect(max('abc', '2')).instanceOf(Error);
    expect(max('abc', '1')).instanceOf(Error);
    expect(max('another', '6')).instanceOf(Error);
    expect(max('equal', '4')).instanceOf(Error);
    expect(max('text with space', '13')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => max('abc')).toThrowError();
    expect(() => max('abc', '')).toThrowError();
    expect(() => max('abc', '-1')).toThrowError();
    expect(() => max('abc', 'text')).toThrowError();
  });
});
