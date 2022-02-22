export class RuleError extends Error {
  public args: string[];

  constructor(cause: string, ...args: string[]) {
    super(cause);
    this.args = args;
  }
}
