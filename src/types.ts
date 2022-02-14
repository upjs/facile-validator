export interface Rule {
  (value: string, args?: string): true | Error;
}

export interface Rules {
  [key: string]: Rule;
}
