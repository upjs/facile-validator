import { describe, expect, it } from 'vitest';
import { alpha } from '@/rules';

describe('rules: alpha', () => {
  it('should accept for alphabetic characters', () => {
    expect(alpha('hey')).toBe(true);
    expect(alpha('سلام')).toBe(true);
    expect(alpha('嘿')).toBe(true);
    expect(alpha('Füße')).toBe(true);
  });

  it('should reject for non-alphabetic characters', () => {
    expect(alpha('a a')).toBeInstanceOf(Error);
    expect(alpha('a ')).toBeInstanceOf(Error);
    expect(alpha('a-a')).toBeInstanceOf(Error);
    expect(alpha('a_a')).toBeInstanceOf(Error);
    expect(alpha('a1')).toBeInstanceOf(Error);
    expect(alpha('1')).toBeInstanceOf(Error);
    expect(alpha('😉')).toBeInstanceOf(Error);
    expect(alpha('(e)')).toBeInstanceOf(Error);
  });
});
