import Language from '@/modules/language';
import { TYPE_CHECKBOX, TYPE_RADIO, TYPE_FILE } from '@/types/element-type';
import { fileToString } from './file-to-string';

export function toCamelCase(value: string) {
  return value.replace(/-./g, (match) => match[1].toUpperCase());
}

export async function getValue(element: HTMLInputElement): Promise<string> {
  if (element.type === TYPE_CHECKBOX || element.type === TYPE_RADIO) {
    return String(element.checked);
  }

  if (element.type === TYPE_FILE && element.files) {
    const value = await fileToString(element.files[0]);

    return value;
  }

  return element.value;
}

export function format(message: string, ...toReplace: string[]) {
  return message.replace(/\$(\d)/g, (_, index) => toReplace?.[index - 1] || '');
}

export function lang(key: string, ...args: string[]): string {
  const languages = Language.get();
  let item = key;

  if (Object.prototype.hasOwnProperty.call(languages, key)) {
    item = languages[key];
  }

  return format(item, ...args);
}
