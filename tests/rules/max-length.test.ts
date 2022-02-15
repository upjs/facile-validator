import { describe, expect, it } from 'vitest';
import { maxLength } from '@/rules';

describe('rules: maxLength', () => {
  it('should accept value with correct input', () => {
    expect(maxLength('abc', '4')).toBe(true);
    expect(maxLength('abc', '5')).toBe(true);
    expect(maxLength('another', '10')).toBe(true);
    expect(maxLength('equal', '5')).toBe(true);
    expect(maxLength('text with space', '15')).toBe(true);
  });

  it('should reject value with incorrect input', () => {
    expect(maxLength('abc', '2')).instanceOf(Error);
    expect(maxLength('abc', '1')).instanceOf(Error);
    expect(maxLength('another', '6')).instanceOf(Error);
    expect(maxLength('equal', '4')).instanceOf(Error);
    expect(maxLength('text with space', '13')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => maxLength('abc')).toThrowError();
    expect(() => maxLength('abc', '')).toThrowError();
    expect(() => maxLength('abc', '-1')).toThrowError();
    expect(() => maxLength('abc', 'text')).toThrowError();
  });
});
