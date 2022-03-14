import { expect, it } from 'vitest';
import { processRule } from '@/utils/helpers';

it('should process "accepted" correctly', () => {
  const rule = 'accepted';
  const result = processRule(rule);

  expect(result.name).toBe('accepted');
  expect(result.argsText).toBe('');
  expect(result.args).toHaveLength(0);
});

it('should process "accepted:" correctly', () => {
  const rule = 'accepted:';
  const result = processRule(rule);

  expect(result.name).toBe('accepted');
  expect(result.argsText).toBe('');
  expect(result.args).toHaveLength(0);
});

it('should process "accepted:arg1" correctly', () => {
  const rule = 'accepted:arg1';
  const result = processRule(rule);

  expect(result.name).toBe('accepted');
  expect(result.argsText).toBe('arg1');
  expect(result.args).toEqual(['arg1']);
});

it('should process "accepted:arg1,arg2" correctly', () => {
  const rule = 'accepted:arg1,arg2';
  const result = processRule(rule);

  expect(result.name).toBe('accepted');
  expect(result.argsText).toBe('arg1,arg2');
  expect(result.args).toEqual(['arg1', 'arg2']);
});

it('should process "accepted:,arg2" correctly', () => {
  const rule = 'accepted:,arg2';
  const result = processRule(rule);

  expect(result.name).toBe('accepted');
  expect(result.argsText).toBe(',arg2');
  expect(result.args).toEqual(['', 'arg2']);
});

it('should process "accepted:arg1," correctly', () => {
  const rule = 'accepted:arg1,';
  const result = processRule(rule);

  expect(result.name).toBe('accepted');
  expect(result.argsText).toBe('arg1,');
  expect(result.args).toEqual(['arg1', '']);
});
