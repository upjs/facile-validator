import { describe, expect, it } from 'vitest';
import { lt } from '@/rules';

describe('rules: lt', () => {
  it('should accept value with correct input', () => {
    expect(lt('149', '150')).toBe(true);
    expect(lt('10', '50')).toBe(true);
    expect(lt('-200', '-100')).toBe(true);
    expect(lt('-11', '-10')).toBe(true);
  });

  it('should reject value with incorrect input', () => {
    expect(lt('100', '100')).instanceOf(Error);
    expect(lt('100', '99')).instanceOf(Error);
    expect(lt('0', '0')).instanceOf(Error);
    expect(lt('0', '-1')).instanceOf(Error);
    expect(lt('-200', '-200')).instanceOf(Error);
    expect(lt('-200', '-201')).instanceOf(Error);
    expect(lt('', '10')).instanceOf(Error);
    expect(lt('', '-10')).instanceOf(Error);
  });

  it('should throw error on invalid argument', () => {
    expect(() => lt('1')).toThrowError();
    expect(() => lt('1', '')).toThrowError();
    expect(() => lt('1', 'test')).toThrowError();
  });
});
