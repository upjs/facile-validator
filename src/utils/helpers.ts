export function toCamelCase(value: string) {
  return value.replace(/-./g, (match) => match[1].toUpperCase());
}
