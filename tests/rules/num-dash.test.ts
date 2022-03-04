import { describe, expect, it } from 'vitest';
import { numDash } from '@/rules';

describe('rules: num-dash', () => {
  it('should accept for numbers with dashes', () => {
    expect(numDash('1')).toBe(true);
    expect(numDash('1-2-3')).toBe(true);
    expect(numDash('1-2-3-4-')).toBe(true);
    expect(numDash('1_2')).toBe(true); // Underscores are accpeted
    expect(numDash('۱')).toBe(true);
    expect(numDash('٤')).toBe(true); // Arabic 4
    expect(numDash('۴')).toBe(true); // Persian 4
    expect(numDash('۴-۴-۴-۴')).toBe(true); // Persian 4
  });

  it('should reject for non-alpha-numeric characters', () => {
    expect(numDash('hey')).toBeInstanceOf(Error);
    expect(numDash('سلام')).toBeInstanceOf(Error);
    expect(numDash('嘿')).toBeInstanceOf(Error);
    expect(numDash('Füße')).toBeInstanceOf(Error);
    expect(numDash('a1')).toBeInstanceOf(Error);
    expect(numDash('a a')).toBeInstanceOf(Error);
    expect(numDash('a ')).toBeInstanceOf(Error);
    expect(numDash('a-a')).toBeInstanceOf(Error);
    expect(numDash('a_a')).toBeInstanceOf(Error);
    expect(numDash('a-1')).toBeInstanceOf(Error);
    expect(numDash('a 1')).toBeInstanceOf(Error);
    expect(numDash('😉')).toBeInstanceOf(Error);
  });
});
