import { describe, expect, it } from 'vitest';
import { alphaNumDash } from '@/rules';

describe('rules: alpha-dash', () => {
  it('Should accept for alpha-numeric characters, dashes, and underscores', () => {
    expect(alphaNumDash('hey')).toBe(true);
    expect(alphaNumDash('سلام')).toBe(true);
    expect(alphaNumDash('嘿')).toBe(true);
    expect(alphaNumDash('Füße')).toBe(true);
    expect(alphaNumDash('a_a')).toBe(true);
    expect(alphaNumDash('a-a')).toBe(true);
    expect(alphaNumDash('1')).toBe(true);
    expect(alphaNumDash('۱')).toBe(true);
    expect(alphaNumDash('٤')).toBe(true); // Arabic 4
    expect(alphaNumDash('۴')).toBe(true); // Persian 4
    expect(alphaNumDash('a1')).toBe(true);
    expect(alphaNumDash('__1')).toBe(true);
    expect(alphaNumDash('ـ')).toBe(true); // ARABIC TATWEEL {kashida}
  });

  it('Should reject for non alpha-numeric characters', () => {
    expect(alphaNumDash('a a')).toBeInstanceOf(Error);
    expect(alphaNumDash('a b_1')).toBeInstanceOf(Error);
    expect(alphaNumDash('😉')).toBeInstanceOf(Error);
    expect(alphaNumDash('(e)')).toBeInstanceOf(Error);
    expect(alphaNumDash(' ')).toBeInstanceOf(Error);
    expect(alphaNumDash('—')).toBeInstanceOf(Error); // EM DASH
  });
});
