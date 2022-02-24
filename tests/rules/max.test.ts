import { describe, expect, it } from 'vitest';
import { max } from '@/rules';

describe('rules: max', () => {
  it('should accept value with correct input (string type)', () => {
    expect(max('abc', 'string,4')).toBe(true);
    expect(max('abc', 'string,5')).toBe(true);
    expect(max('another', 'string,10')).toBe(true);
    expect(max('equal', 'string,5')).toBe(true);
    expect(max('text with space', 'string,15')).toBe(true);
  });

  it('should accept value with correct input (number type)', () => {
    expect(max('150', 'number,150')).toBe(true);
    expect(max('100', 'number,150')).toBe(true);
    expect(max('-100', 'number,0')).toBe(true);
    expect(max('-10', 'number,-10')).toBe(true);
  });

  it('should reject value with incorrect input (string type)', () => {
    expect(max('abc', 'string,2')).instanceOf(Error);
    expect(max('abc', 'string,1')).instanceOf(Error);
    expect(max('another', 'string,6')).instanceOf(Error);
    expect(max('equal', 'string,4')).instanceOf(Error);
    expect(max('text with space', 'string,13')).instanceOf(Error);
  });

  it('should reject value with incorrect input (number type)', () => {
    expect(max('100', 'number,99')).instanceOf(Error);
    expect(max('50', 'number,0')).instanceOf(Error);
    expect(max('1', 'number,0')).instanceOf(Error);
    expect(max('-200', 'number,-1000')).instanceOf(Error);
    expect(max('0', 'number,-1')).instanceOf(Error);
    expect(max('', 'number,10')).instanceOf(Error);
    expect(max('', 'number,-10')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => max('1')).toThrowError();
    expect(() => max('1', '')).toThrowError();
    expect(() => max('1', '3')).toThrowError();
    expect(() => max('1', '-1')).toThrowError();

    expect(() => max('1', 'string')).toThrowError();
    expect(() => max('1', 'string,-1')).toThrowError();
    expect(() => max('1', 'string,text')).toThrowError();

    expect(() => max('1', 'number')).toThrowError();
    expect(() => max('1', 'number,text')).toThrowError();
  });
});
