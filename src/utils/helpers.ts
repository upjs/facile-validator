import EventBus from '@/modules/events';
import Language from '@/modules/language';
import { LangKeys, FormInputElement } from '@/types';
import { TYPE_CHECKBOX, TYPE_RADIO } from '@/types/elements';

export function toCamelCase(value: string) {
  return value.replace(/-./g, (match) => match[1].toUpperCase());
}

export function getValue(element: FormInputElement): string {
  if (element instanceof HTMLInputElement) {
    if (element.type === TYPE_CHECKBOX || element.type === TYPE_RADIO) {
      return element.checked ? 'checked' : '';
    }

    return element.value;
  }

  if (element instanceof HTMLSelectElement) {
    return Array.from(element.selectedOptions)
      .map((option) => option.value)
      .join(',');
  }

  return '';
}

export function format(message: string, ...toReplace: string[]) {
  return message.replace(/\$(\d)/g, (_, index) => toReplace?.[index - 1] || '');
}

export function processRule(rule: string): { name: string; argsText: string; args: string[] } {
  const [name, argsText = ''] = rule.split(':');

  return {
    name,
    argsText,
    args: processArgs(argsText),
  };
}

export function processArgs(args: string): string[] {
  return args ? args.split(',') : [];
}

export function lang(key: string, ...args: string[]): string {
  const languages = Language.get();
  let item = key;

  if (Object.prototype.hasOwnProperty.call(languages, key)) {
    item = languages[key as LangKeys] as string;
  }

  return format(item, ...args);
}

export function when(condition: boolean) {
  return {
    throwError(message: string) {
      if (condition) {
        throw new Error(message);
      }
    },
  };
}

export function defaultErrorListeners(events: EventBus) {
  events.on('field:error', (_parentEl, element, errors) => {
    errors.reverse().forEach((error) => {
      const messageElement = document.createElement('p');
      messageElement.classList.add('validator-err');
      messageElement.innerHTML = error.message;

      if (element.parentNode) {
        element.parentNode.insertBefore(messageElement, element.nextSibling);
      }
    });
  });

  events.on('validation:start', (parentEl) => {
    parentEl.querySelectorAll('.validator-err').forEach((el) => {
      el.remove();
    });
  });
}
