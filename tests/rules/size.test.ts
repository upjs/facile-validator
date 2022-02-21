import { describe, expect, it } from 'vitest';
import { size } from '@/rules';

describe('rules: size', () => {
  it('should accept value with correct input', () => {
    expect(size('abc', 'string,3')).toBe(true);
    expect(size('', 'string,0')).toBe(true);
    expect(size('abcdefghijklmnopqrstuvwxyz', 'string,26')).toBe(true);

    expect(size('123', 'number,123')).toBe(true);
    expect(size('0', 'number,0')).toBe(true);
    expect(size('123456789', 'number,123456789')).toBe(true);
  });

  it('should reject value with incorrect input', () => {
    expect(size('abc', 'string,0')).instanceOf(Error);
    expect(size('abc', 'string,2')).instanceOf(Error);
    expect(size('abc', 'string,4')).instanceOf(Error);
    expect(size('', 'string,1')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => size('abc')).toThrowError();
    expect(() => size('abc', '')).toThrowError();
    expect(() => size('abc', 'string')).toThrowError();
    expect(() => size('abc', '3')).toThrowError();
    expect(() => size('abc', '-1')).toThrowError();
    expect(() => size('abc', 'string,-1')).toThrowError();
  });
});
