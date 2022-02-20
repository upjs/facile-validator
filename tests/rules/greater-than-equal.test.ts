import { describe, expect, it } from 'vitest';
import { gte } from '@/rules';

describe('rules: gte', () => {
  it('should accept value with correct input', () => {
    expect(gte('150', '150')).toBe(true);
    expect(gte('100', '50')).toBe(true);
    expect(gte('-100', '-200')).toBe(true);
    expect(gte('-10', '-10')).toBe(true);
  });

  it('should reject value with incorrect input', () => {
    expect(gte('100', '101')).instanceOf(Error);
    expect(gte('50', '100')).instanceOf(Error);
    expect(gte('1', '2')).instanceOf(Error);
    expect(gte('-200', '-100')).instanceOf(Error);
    expect(gte('0', '1')).instanceOf(Error);
    expect(gte('', '10')).instanceOf(Error);
    expect(gte('', '-10')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => gte('1')).toThrowError();
    expect(() => gte('1', '')).toThrowError();
    expect(() => gte('1', 'test')).toThrowError();
  });
});
