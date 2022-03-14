import { describe, expect, it } from 'vitest';
import { int } from '@/rules';

describe('rules: int', () => {
  it('should accept integers', () => {
    expect(int('123')).toBe(true);
    expect(int('-123')).toBe(true);
    expect(int('+123')).toBe(true);
    expect(int('0')).toBe(true);
    expect(int('10')).toBe(true);
    expect(int('-10')).toBe(true);
    expect(int('+0')).toBe(true);
    expect(int('-0')).toBe(true);
  });

  it('should reject non-integers', () => {
    expect(int('123a')).toBeInstanceOf(Error);
    expect(int('a123 ')).toBeInstanceOf(Error);
    expect(int('-a')).toBeInstanceOf(Error);
    expect(int('+a')).toBeInstanceOf(Error);
    expect(int('123a')).toBeInstanceOf(Error);
    expect(int('1.2')).toBeInstanceOf(Error);
    expect(int('-1.2')).toBeInstanceOf(Error);
    expect(int('e')).toBeInstanceOf(Error);
    expect(int('0.5')).toBeInstanceOf(Error);
    expect(int('-0.5')).toBeInstanceOf(Error);
  });
});
