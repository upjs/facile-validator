import { describe, expect, it } from 'vitest';
import { lte } from '@/rules';

describe('rules: lte', () => {
  it('should accept value with correct input', () => {
    expect(lte('150', '150')).toBe(true);
    expect(lte('100', '150')).toBe(true);
    expect(lte('-100', '0')).toBe(true);
    expect(lte('-10', '-10')).toBe(true);
  });

  it('should reject value with incorrect input', () => {
    expect(lte('100', '99')).instanceOf(Error);
    expect(lte('50', '0')).instanceOf(Error);
    expect(lte('1', '0')).instanceOf(Error);
    expect(lte('-200', '-1000')).instanceOf(Error);
    expect(lte('0', '-1')).instanceOf(Error);
    expect(lte('', '10')).instanceOf(Error);
    expect(lte('', '-10')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => lte('1')).toThrowError();
    expect(() => lte('1', '')).toThrowError();
    expect(() => lte('1', 'test')).toThrowError();
  });
});
