import { describe, expect, it } from 'vitest';
import { number } from '@/rules';

describe('rules: number', () => {
  it('should accept numbers', () => {
    expect(number('123')).toBe(true);
    expect(number('-123')).toBe(true);
    expect(number('+123')).toBe(true);
    expect(number('1.5')).toBe(true);
    expect(number('+1.5')).toBe(true);
    expect(number('-1.5')).toBe(true);
    expect(number('0')).toBe(true);
    expect(number('10')).toBe(true);
    expect(number('-10')).toBe(true);
    expect(number('+0')).toBe(true);
    expect(number('-0')).toBe(true);
    expect(number('0.5')).toBe(true);
    expect(number('+0.5')).toBe(true);
    expect(number('-0.5')).toBe(true);
    expect(number('.5')).toBe(true);
    expect(number('+.5')).toBe(true);
    expect(number('-.5')).toBe(true);
    expect(number('1.')).toBe(true);
    expect(number('-1.')).toBe(true);
    expect(number('+1.')).toBe(true);
  });

  it('should reject non-numbers', () => {
    expect(number('123a')).toBeInstanceOf(Error);
    expect(number('a123 ')).toBeInstanceOf(Error);
    expect(number('-a')).toBeInstanceOf(Error);
    expect(number('+a')).toBeInstanceOf(Error);
    expect(number('123a')).toBeInstanceOf(Error);
    expect(number('e')).toBeInstanceOf(Error);
    expect(number('NaN')).toBeInstanceOf(Error);
    expect(number('123.5n')).toBeInstanceOf(Error);
  });
});
