/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, expect, it } from 'vitest';
import { accepted } from '@/rules';

describe('rules: accepted', () => {
  it('should accept if checkbox is checked', () => {
    expect(accepted('true')).toBe(true);
  });

  it('should reject if not checkbox is not checked', () => {
    expect(accepted('misc')).toBeInstanceOf(Error);
    expect(accepted('false')).toBeInstanceOf(Error);
    // @ts-ignore
    expect(accepted()).toBeInstanceOf(Error);
    // @ts-ignore
    expect(accepted(true)).toBeInstanceOf(Error);
    // @ts-ignore
    expect(accepted(false)).toBeInstanceOf(Error);
  });
});
