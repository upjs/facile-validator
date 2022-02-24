import { describe, expect, it } from 'vitest';
import { between } from '@/rules';

describe('rules: between', () => {
  it('should accept value with correct input (string type)', () => {
    expect(between('text', 'string,0,4')).toBe(true);
    expect(between('text', 'string,4,10')).toBe(true);
    expect(between('text', 'string,0,10')).toBe(true);

    expect(between('text with space', 'string,0,15')).toBe(true);
    expect(between('text with space', 'string,15,20')).toBe(true);
    expect(between('text with space', 'string,0,20')).toBe(true);
  });

  it('should accept value with correct input (number type)', () => {
    expect(between('100', 'number,0,100')).toBe(true);
    expect(between('100', 'number,100,200')).toBe(true);
    expect(between('100', 'number,0,200')).toBe(true);

    expect(between('-100', 'number,-200,-100')).toBe(true);
    expect(between('-100', 'number,-100,0')).toBe(true);
    expect(between('-100', 'number,-200,0')).toBe(true);
  });

  it('should reject value with incorrect input (string type)', () => {
    expect(between('text', 'string,5,10')).instanceOf(Error);
    expect(between('text', 'string,0,3')).instanceOf(Error);

    expect(between('text with space', 'string,16,20')).instanceOf(Error);
    expect(between('text with space', 'string,10,14')).instanceOf(Error);
  });

  it('should reject value with incorrect input (number type)', () => {
    expect(between('100', 'number,101,200')).instanceOf(Error);
    expect(between('100', 'number,0,99')).instanceOf(Error);

    expect(between('-100', 'number,-200,-101')).instanceOf(Error);
    expect(between('-100', 'number,-99,0')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => between('text')).toThrowError();
    expect(() => between('text', '')).toThrowError();
    expect(() => between('text', 'string')).toThrowError();
    expect(() => between('text', '5')).toThrowError();
    expect(() => between('text', '0,1')).toThrowError();

    expect(() => between('text', 'string,1')).toThrowError();
    expect(() => between('text', 'string,1,1')).toThrowError();
    expect(() => between('text', 'string,-1,-1')).toThrowError();
    expect(() => between('text', 'string,-1,0')).toThrowError();
    expect(() => between('text', 'string,0,-1')).toThrowError();
    expect(() => between('text', 'string,10,5')).toThrowError();
    expect(() => between('text', 'string,-5,-10')).toThrowError();
    expect(() => between('text', 'string,0,text')).toThrowError();
    expect(() => between('text', 'string,text,0')).toThrowError();
    expect(() => between('text', 'string,text,text')).toThrowError();

    expect(() => between('text', 'number,1,1')).toThrowError();
    expect(() => between('text', 'number,-1,-1')).toThrowError();
    expect(() => between('text', 'number,10,5')).toThrowError();
    expect(() => between('text', 'number,-5,-10')).toThrowError();
    expect(() => between('text', 'number,text,text')).toThrowError();
    expect(() => between('text', 'number,0,text')).toThrowError();
    expect(() => between('text', 'number,text,0')).toThrowError();
  });
});
