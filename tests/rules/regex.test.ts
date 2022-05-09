import { describe, expect, it } from 'vitest';
import { regex } from '@/rules';

describe('rules: regex', () => {
  it('should accept if value passed', () => {
    expect(regex('1', '/^\\d+$/')).toBe(true);
    // expect(regex('+')).toBe(true);
    // expect(regex('@')).toBe(true);
    // expect(regex('  test  ')).toBe(true);
    // expect(regex('  e  ')).toBe(true);
    // expect(regex(' 1')).toBe(true);
    // expect(regex('1 ')).toBe(true);
    // expect(regex('~')).toBe(true);
  });

  it('should reject if value not passed', () => {
    // expect(regex('')).toBeInstanceOf(Error);
    // expect(regex('   ')).toBeInstanceOf(Error);
  });
});
