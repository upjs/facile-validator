import { describe, expect, it } from 'vitest';
import { required } from '@/rules';

describe('rules: required', () => {
  it('should accept if value passed', () => {
    expect(required('1')).toBe(true);
    expect(required('+')).toBe(true);
    expect(required('@')).toBe(true);
    expect(required('  test  ')).toBe(true);
    expect(required('  e  ')).toBe(true);
    expect(required(' 1')).toBe(true);
    expect(required('1 ')).toBe(true);
    expect(required('~')).toBe(true);
  });

  it('should reject if value not passed', () => {
    expect(required('')).toBeInstanceOf(Error);
    expect(required('   ')).toBeInstanceOf(Error);
  });
});
