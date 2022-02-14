import { describe, expect, it } from 'vitest';
import { min } from '@/rules';

describe('rules: min', () => {
  it('valid value', () => {
    expect(min('abc', '2')).toBe(true);
    expect(min('abc', '3')).toBe(true);
    expect(min('another', '5')).toBe(true);
    expect(min('equal', '5')).toBe(true);
    expect(min('text with space', '15')).toBe(true);
  });

  it('invalid value', () => {
    expect(min('abc', '4')).instanceOf(Error);
    expect(min('abc', '5')).instanceOf(Error);
    expect(min('another', '10')).instanceOf(Error);
    expect(min('equal', '6')).instanceOf(Error);
    expect(min('text with space', '16')).instanceOf(Error);
  });

  it('invalid argument', () => {
    expect(() => min('abc')).toThrowError();
    expect(() => min('abc', '')).toThrowError();
    expect(() => min('abc', '-1')).toThrowError();
    expect(() => min('abc', 'text')).toThrowError();
  });
});
