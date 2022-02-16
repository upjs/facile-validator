import { TYPE_CHECKBOX, TYPE_RADIO } from '@/types/element-type';

export function toCamelCase(value: string) {
  return value.replace(/-./g, (match) => match[1].toUpperCase());
}

export function getValue(element: HTMLInputElement): string {
  if (element.type === TYPE_CHECKBOX || element.type === TYPE_RADIO) {
    return String(element.checked);
  }

  return element.value;
}
