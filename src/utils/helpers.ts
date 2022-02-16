import Language from '@/modules/locale';
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

export function format(message: string, ...toReplace: string[]) {
  return message.replace(/\$(\d)/g, (_, index) => toReplace?.[index - 1] || '');
}

export function lang(key: string, ...args: string[]) {
  return format(Language.get()[key] ?? key, ...args);
}
