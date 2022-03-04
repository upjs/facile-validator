import { describe, expect, it } from 'vitest';
import { alphaNum } from '@/rules';

describe('rules: alpha-num', () => {
  it('should accept for alpha-numeric characters', () => {
    expect(alphaNum('hey')).toBe(true);
    expect(alphaNum('سلام')).toBe(true);
    expect(alphaNum('嘿')).toBe(true);
    expect(alphaNum('Füße')).toBe(true);
    expect(alphaNum('a1')).toBe(true);
    expect(alphaNum('1')).toBe(true);
    expect(alphaNum('۱')).toBe(true);
    expect(alphaNum('٤')).toBe(true); // Arabic 4
    expect(alphaNum('۴')).toBe(true); // Persian 4
    expect(alphaNum('a1')).toBe(true);
  });

  it('should reject for non-alpha-numeric characters', () => {
    expect(alphaNum('a a')).toBeInstanceOf(Error);
    expect(alphaNum('a ')).toBeInstanceOf(Error);
    expect(alphaNum('a-a')).toBeInstanceOf(Error);
    expect(alphaNum('a_a')).toBeInstanceOf(Error);
    expect(alphaNum('a-1')).toBeInstanceOf(Error);
    expect(alphaNum('a 1')).toBeInstanceOf(Error);
    expect(alphaNum('😉')).toBeInstanceOf(Error);
    expect(alphaNum('(e)')).toBeInstanceOf(Error);
  });
});
