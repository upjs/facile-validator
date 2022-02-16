import { describe, expect, it } from 'vitest';
import { digits } from '@/rules';

describe('rules: digits', () => {
  it('should be accepted with correct value and argument', () => {
    expect(digits('0000000000', '10')).toBe(true);
    expect(digits('1000000000', '10')).toBe(true);
    expect(digits('-1000000000', '10')).toBe(true);

    expect(digits('1000000000000000000000000', '25')).toBe(true);
    expect(digits('-999999999999999999999999999999', '30')).toBe(true);
  });

  it('should not be accepted with an unexpected value', () => {
    const length = '10';

    expect(digits((100_000_000).toString(), length)).toBeInstanceOf(Error);
    expect(digits('1234567890.1', length)).toBeInstanceOf(Error);
  });

  it('should throw an error with incorrect argument', () => {
    const value = (100_000_000).toString();

    expect(() => digits(value)).toThrowError();
    expect(() => digits(value, '')).toThrowError();
    expect(() => digits(value, '10.4')).toThrowError();
    expect(() => digits(value, '-1')).toThrowError();
    expect(() => digits(value, '0')).toThrowError();
    expect(() => digits(value, 'yay')).toThrowError();
  });
});
