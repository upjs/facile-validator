import required from "./required";
import min from "./min";
import email from "./email";
import between from "./between";
import number from "./number";
import int from "./int";

export default {
  ['required' as string]: required,
  ['min' as string]: min,
  ['email' as string]: email,
  ['between' as string]: between,
  ['number' as string]: number,
  ['int' as string]: int,
  ['integer' as string]: int,
}