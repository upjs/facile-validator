import { describe, expect, it } from 'vitest';
import { regex } from '@/rules';
import * as Regexes from '@/utils/regex';
import { RuleError } from '@/modules/rule-error';
import { ARGUMENT_MUST_BE_PROVIDED, INVALID_PATTERN } from '@/types/error-dev';

describe('rules: regex', () => {
  it('should accept if the pattern matches', () => {
    // Digits
    expect(regex('1', '/^\\d+$/')).toBe(true);

    // Numbers
    expect(regex('-.5', Regexes.number.toString())).toBe(true);

    // Decimal numbers
    expect(regex('1.5', '/^\\d*\\.\\d+$/')).toBe(true);

    // No digits
    expect(regex('abc', '/^\\D+$/')).toBe(true);

    // Email
    expect(regex('a@example.com', Regexes.email.toString())).toBe(true);

    // alphaNumDash
    expect(regex('abc-123', Regexes.alphaNumDash.toString())).toBe(true);

    // Alphanumeric
    expect(regex('abc123', Regexes.alphaNum.toString())).toBe(true);

    // Date
    expect(regex('2019-01-01', Regexes.date.toString())).toBe(true);
  });

  it("should reject if pattern doesn't match", () => {
    expect(regex('2019-01-1', Regexes.date.toString())).toBeInstanceOf(RuleError);
    expect(regex('2019/01/01', Regexes.date.toString())).toBeInstanceOf(RuleError);

    // Decimal numbers
    expect(regex('15', '/^\\d*\\.\\d+$/')).toBeInstanceOf(RuleError);
  });

  it('should throw error on invalid argument', () => {
    expect(() => regex('...')).toThrowError(ARGUMENT_MUST_BE_PROVIDED);
    expect(() => regex('...', '')).toThrowError(ARGUMENT_MUST_BE_PROVIDED);

    // Invalid Patterns
    expect(() => regex('...', '^/[a-z')).toThrowError(INVALID_PATTERN);
    expect(() => regex('...', '(a')).toThrowError(INVALID_PATTERN);
  });
});
