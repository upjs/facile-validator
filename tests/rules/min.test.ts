import { describe, expect, it } from 'vitest';
import { min } from '@/rules';

describe('rules: min', () => {
  it('should accept value with correct input', () => {
    expect(min('150', 'number,150')).toBe(true);
    expect(min('100', 'number,50')).toBe(true);
    expect(min('-100', 'number,-200')).toBe(true);
    expect(min('-10', 'number,-10')).toBe(true);
  });

  it('should reject value with incorrect input', () => {
    expect(min('100', 'number,101')).instanceOf(Error);
    expect(min('50', 'number,100')).instanceOf(Error);
    expect(min('1', 'number,2')).instanceOf(Error);
    expect(min('-200', 'number,-100')).instanceOf(Error);
    expect(min('0', 'number,1')).instanceOf(Error);
    expect(min('', 'number,10')).instanceOf(Error);
    expect(min('', 'number,-10')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => min('1')).toThrowError();
    expect(() => min('1', '')).toThrowError();
    expect(() => min('1', 'number')).toThrowError();
    expect(() => min('1', 'number,text')).toThrowError();
  });
});
