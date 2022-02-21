/* eslint-disable @typescript-eslint/no-unused-vars */

export function replaceRule(rule: string, rules: string[], _form: HTMLFormElement): string {
  if (rule.includes('size:')) {
    return replaceSizeRule(rule, rules);
  }

  return rule;
}

function processRule(rule: string): { name: string; args: string[] } {
  const [ruleName, args] = rule.split(':');

  return {
    name: ruleName,
    args: args ? args.split(',') : [],
  };
}

function replaceSizeRule(rule: string, rules: string[]): string {
  const RULE = processRule(rule);

  const indexOfRule = rules.indexOf(rule);
  const rulesBeforeRule = rules.slice(0, indexOfRule);

  let type = 'string';
  if (rulesBeforeRule.includes('number') || rulesBeforeRule.includes('int')) {
    type = 'number';
  }

  return `${RULE.name}:${type},${RULE.args.join(',')}`;
}
