import EventBus from '@/modules/events';
import Language from '@/modules/language';
import { LangKeys, FormInputElement, XRules, RichXRule } from '@/types';
import { TYPE_CHECKBOX, TYPE_RADIO } from '@/types/elements';

export function toCamelCase(value: string) {
  return value.replace(/-./g, (match) => match[1].toUpperCase());
}

export function getValue(element: FormInputElement) {
  if (element instanceof HTMLInputElement) {
    if (element.type === TYPE_CHECKBOX || element.type === TYPE_RADIO) {
      return element.checked ? 'checked' : '';
    }

    return element.value;
  }

  if (element instanceof HTMLTextAreaElement) {
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

export function processRule(rule: string, xRules?: XRules) {
  let [name, argsValue = ''] = rule.split(':');
  let customErrorMessage: RichXRule['errorMessage'] = '';

  if (isXRule(rule)) {
    if (!hasArgument(rule)) {
      throw new Error(`${rule}: x-rules require an argument that is defined in the config.xRules object`);
    }

    name = name.substring(2);

    if (isObject(xRules?.[argsValue])) {
      const rule = xRules?.[argsValue] as RichXRule;
      customErrorMessage = rule.errorMessage || '';
      argsValue = String(rule.value);
    } else {
      argsValue = String(xRules?.[argsValue]) || '';
    }
  }

  return {
    name,
    argsValue,
    args: processArgs(argsValue),
    customErrorMessage,
  };
}

export function processArgs(args: string) {
  return args ? args.split(',') : [];
}

export function lang(key: string, ...args: string[]) {
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

  events.on('validation:start', (container) => {
    container.querySelectorAll('.validator-err').forEach((el) => {
      el.remove();
    });
  });
}

export function hasArgument(rule: string) {
  return rule.includes(':') && rule.split(':').length === 2;
}

export function isXRule(rule: string) {
  return rule.startsWith('x-');
}

export function isObject(obj: unknown) {
  return typeof obj === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
