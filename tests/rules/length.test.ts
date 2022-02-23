import { describe, expect, it } from 'vitest';
import { length } from '@/rules';

describe('rules: length', () => {
  it('should accept value with correct input', () => {
    expect(length('abc', '3')).toBe(true);
    expect(length('another', '7')).toBe(true);
    expect(length('equal', '5')).toBe(true);
    expect(length('text with space', '15')).toBe(true);
    expect(length('', '0')).toBe(true);
  });

  it('should reject value with incorrect input', () => {
    expect(length('abc', '2')).instanceOf(Error);
    expect(length('abc', '4')).instanceOf(Error);
    expect(length('another', '6')).instanceOf(Error);
    expect(length('equal', '4')).instanceOf(Error);
    expect(length('text with space', '13')).instanceOf(Error);
    expect(length('', '1')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => length('abc')).toThrowError();
    expect(() => length('abc', '')).toThrowError();
    expect(() => length('abc', '-1')).toThrowError();
    expect(() => length('abc', 'text')).toThrowError();
  });
});
