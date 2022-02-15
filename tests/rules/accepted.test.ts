import { describe, expect, it } from 'vitest';
import { accepted } from '@/rules';

describe('rules: accepted', () => {
  it('should accept if checkbox is checked', () => {
    expect(accepted('true')).toBe(true);
  });

  it('should reject if not checkbox is not checked', () => {
    expect(accepted('misc')).toBeInstanceOf(Error);
    expect(accepted('false')).toBeInstanceOf(Error);
    expect(accepted()).toBeInstanceOf(Error);
    expect(accepted(true)).toBeInstanceOf(Error);
    expect(accepted(false)).toBeInstanceOf(Error);
  });
});
