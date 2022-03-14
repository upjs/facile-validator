import { describe, expect, it } from 'vitest';
import { email } from '@/rules';

describe('rules: email', () => {
  it('should accept email', () => {
    expect(email('test@test.com')).toBe(true);
    expect(email('test123@gmail.com')).toBe(true);
    expect(email('test.123@iran.ir')).toBe(true);
    expect(email('123.test.123@yahooo.com')).toBe(true);
  });

  it('should reject non-email', () => {
    expect(email('test.com')).toBeInstanceOf(Error);
    expect(email('test')).toBeInstanceOf(Error);
    expect(email('test@test')).toBeInstanceOf(Error);
    expect(email('test@test.')).toBeInstanceOf(Error);
    expect(email('@test')).toBeInstanceOf(Error);
    expect(email('@test.')).toBeInstanceOf(Error);
    expect(email('@test.com')).toBeInstanceOf(Error);
  });
});
