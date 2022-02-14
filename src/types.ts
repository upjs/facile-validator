import ValidatorError from "./ValidatorError";

export interface Rule {
    (value: string, args?: string): true | ValidatorError;
}