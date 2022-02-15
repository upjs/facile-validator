import { describe, expect, it } from 'vitest';
import { between } from '@/rules';

describe('rules: between', () => {
  it('should accept value with correct input (both argument)', () => {
    expect(between('1', '0,2')).toBe(true);
    expect(between('1', '0,1')).toBe(true);
    expect(between('1', '1,2')).toBe(true);
    expect(between('1', '1,1')).toBe(true);

    expect(between('-1', '-2,0')).toBe(true);
    expect(between('-1', '-1,0')).toBe(true);
    expect(between('-1', '-2,-1')).toBe(true);
    expect(between('-1', '-1,-1')).toBe(true);

    expect(between('100', '0,200')).toBe(true);
    expect(between('100', '0,100')).toBe(true);
    expect(between('100', '1,200')).toBe(true);
    expect(between('100', '1,100')).toBe(true);

    expect(between('-100', '-200,0')).toBe(true);
    expect(between('-100', '-100,0')).toBe(true);
    expect(between('-100', '-200,-1')).toBe(true);
    expect(between('-100', '-100,-1')).toBe(true);
  });

  it('should accept value with correct input (first argument)', () => {
    expect(between('1', '0,')).toBe(true);
    expect(between('1', '1,')).toBe(true);

    expect(between('-1', '-2,')).toBe(true);
    expect(between('-1', '-1,')).toBe(true);

    expect(between('100', '0,')).toBe(true);
    expect(between('100', '1,')).toBe(true);

    expect(between('-100', '-200,')).toBe(true);
    expect(between('-100', '-100,')).toBe(true);
  });

  it('should accept value with correct input (second argument)', () => {
    expect(between('1', ',2')).toBe(true);
    expect(between('1', ',1')).toBe(true);

    expect(between('-1', ',0')).toBe(true);
    expect(between('-1', ',-1')).toBe(true);

    expect(between('100', ',200')).toBe(true);
    expect(between('100', ',100')).toBe(true);

    expect(between('-100', ',0')).toBe(true);
    expect(between('-100', ',-1')).toBe(true);
  });

  it('should reject value with incorrect input (both argument)', () => {
    expect(between('-1', '0,2')).instanceOf(Error);
    expect(between('3', '0,2')).instanceOf(Error);
    expect(between('0', '1,1')).instanceOf(Error);
    expect(between('2', '1,1')).instanceOf(Error);

    expect(between('-3', '-2,0')).instanceOf(Error);
    expect(between('1', '-2,0')).instanceOf(Error);
    expect(between('0', '-1,-1')).instanceOf(Error);
    expect(between('-2', '-1,-1')).instanceOf(Error);
  });

  it('should reject value with incorrect input (first argument)', () => {
    expect(between('1', '2,')).instanceOf(Error);
    expect(between('-1', '0,')).instanceOf(Error);
    expect(between('-3', '-2,')).instanceOf(Error);
  });

  it('should reject value with incorrect input (second argument)', () => {
    expect(between('3', ',2')).instanceOf(Error);
    expect(between('1', ',0')).instanceOf(Error);
    expect(between('-1', ',-2')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => between('1', '')).toThrowError();
    expect(() => between('1', 'test')).toThrowError();
    expect(() => between('1', 'test,')).toThrowError();
    expect(() => between('1', ',test')).toThrowError();
    expect(() => between('1', 'test,test')).toThrowError();
    expect(() => between('1', 'false,true')).toThrowError();
  });
});
