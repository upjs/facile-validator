export const email =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const integer = /^[+-]?\d+$/;
export const number = /^[+-]?(\d+|\d*\.\d*)$/;

export const alpha = /^[\p{L}\p{M}]+$/u;
export const alphaNum = /^[\p{L}\p{M}\p{N}]+$/u;
export const alphaNumDash = /^[\p{L}\p{M}\p{N}_-]+$/u;
export const numDash = /^[\p{N}_-]+$/u;
