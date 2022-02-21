import { describe, expect, it } from 'vitest';
import { gt } from '@/rules';

describe('rules: gt', () => {
  it('should accept value with correct input', () => {
    expect(gt('151', '150')).toBe(true);
    expect(gt('100', '50')).toBe(true);
    expect(gt('-100', '-200')).toBe(true);
    expect(gt('-9', '-10')).toBe(true);
  });

  it('should reject value with incorrect input', () => {
    expect(gt('100', '100')).instanceOf(Error);
    expect(gt('100', '101')).instanceOf(Error);
    expect(gt('0', '0')).instanceOf(Error);
    expect(gt('0', '1')).instanceOf(Error);
    expect(gt('-200', '-200')).instanceOf(Error);
    expect(gt('-200', '-199')).instanceOf(Error);
    expect(gt('', '10')).instanceOf(Error);
    expect(gt('', '-10')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => gt('1')).toThrowError();
    expect(() => gt('1', '')).toThrowError();
    expect(() => gt('1', 'test')).toThrowError();
  });
});
