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
      .toString();
  }

  return '';
}

export function format(message: string, ...toReplace: string[]) {
  return message.replace(/\$(\d)/g, (_, index) => toReplace?.[index - 1] || '');
}

export function processRule(rule: string): { name: string; args: string[] } {
  const [ruleName, args] = rule.split(':');

  return {
    name: ruleName,
    args: args ? args.split(',') : [],
  };
}

export function lang(key: string, ...args: string[]): string {
  const languages = Language.get();
  let item = key;

  if (Object.prototype.hasOwnProperty.call(languages, key)) {
    item = languages[key as LangKeys] as string;
  }

  return format(item, ...args);
}

export function throwErrorWhen(condition: boolean, message: string): void {
  if (condition) {
    throw new Error(message);
  }
}

export function when(condition: boolean) {
  return {
    throwError(message: string) {
      if (condition) {
        throw new Error(message);
      }
    },
    warning() {
      // ...
    },
    notice() {
      // ...
    },
  };
}

export function defaultErrorListeners(events: EventBus) {
  events.on('error:field', (_parentEl, element, errors) => {
    errors.reverse().forEach((error) => {
      const messageElement = document.createElement('p');
      messageElement.classList.add('validator-err');
      messageElement.innerHTML = error.message;

      if (element.parentNode) {
        element.parentNode.insertBefore(messageElement, element.nextSibling);
      }
    });
  });

  events.on('validate:start', (parentEl) => {
    parentEl.querySelectorAll('.validator-err').forEach((el) => {
      el.remove();
    });
  });
}
