import { describe, expect, it } from 'vitest';
import { min } from '@/rules';

describe('rules: min', () => {
  it('should accept value with correct input (string type)', () => {
    expect(min('abc', 'string,2')).toBe(true);
    expect(min('abc', 'string,3')).toBe(true);
    expect(min('another', 'string,6')).toBe(true);
    expect(min('equal', 'string,5')).toBe(true);
    expect(min('text with space', 'string,15')).toBe(true);
  });

  it('should accept value with correct input (number type)', () => {
    expect(min('150', 'number,150')).toBe(true);
    expect(min('100', 'number,50')).toBe(true);
    expect(min('-100', 'number,-200')).toBe(true);
    expect(min('-10', 'number,-10')).toBe(true);
  });

  it('should reject value with incorrect input (string type)', () => {
    expect(min('abc', 'string,4')).instanceOf(Error);
    expect(min('abc', 'string,5')).instanceOf(Error);
    expect(min('another', 'string,8')).instanceOf(Error);
    expect(min('equal', 'string,6')).instanceOf(Error);
    expect(min('text with space', 'string,17')).instanceOf(Error);
  });

  it('should reject value with incorrect input (number type)', () => {
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
    expect(() => min('1', '3')).toThrowError();
    expect(() => min('1', '-1')).toThrowError();

    expect(() => min('1', 'string')).toThrowError();
    expect(() => min('1', 'string,-1')).toThrowError();
    expect(() => min('1', 'string,text')).toThrowError();

    expect(() => min('1', 'number')).toThrowError();
    expect(() => min('1', 'number,text')).toThrowError();
  });
});
