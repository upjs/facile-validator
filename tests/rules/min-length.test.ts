import { describe, expect, it } from 'vitest';
import { minLength } from '@/rules';

describe('rules: min-length', () => {
  it('should accept value with correct input', () => {
    expect(minLength('abc', '2')).toBe(true);
    expect(minLength('abc', '3')).toBe(true);
    expect(minLength('another', '5')).toBe(true);
    expect(minLength('equal', '5')).toBe(true);
    expect(minLength('text with space', '15')).toBe(true);
  });

  it('should reject value with incorrect input', () => {
    expect(minLength('abc', '4')).instanceOf(Error);
    expect(minLength('abc', '5')).instanceOf(Error);
    expect(minLength('another', '10')).instanceOf(Error);
    expect(minLength('equal', '6')).instanceOf(Error);
    expect(minLength('text with space', '16')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => minLength('abc')).toThrowError();
    expect(() => minLength('abc', '')).toThrowError();
    expect(() => minLength('abc', '-1')).toThrowError();
    expect(() => minLength('abc', 'text')).toThrowError();
  });
});
