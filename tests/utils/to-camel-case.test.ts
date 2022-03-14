import { expect, it } from 'vitest';
import { toCamelCase } from '@/utils/helpers';

it('should convert kebab-case to camelCase', () => {
  expect(toCamelCase('kebab-case')).toBe('kebabCase');
  expect(toCamelCase('kebab-case-with-dashes')).toBe('kebabCaseWithDashes');
  expect(toCamelCase('test')).toBe('test');
});
