export class RuleError extends Error {
  public rule: string;
  public args: string[];

  constructor(rule: string, cause: string, ...args: string[]) {
    super(cause);
    this.rule = rule;
    this.args = args;
  }
}
