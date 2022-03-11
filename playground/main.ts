import './style.css';
import { Validator, enLang } from '@/index';
import { ErrorDetail } from '@/types';

const validator = new Validator('form', {
  lang: enLang,
  autoSubmit: true,
  on: {
    'validate:success': () => {
      alert('Success! Form validated with no errors');
    },
    'validate:failed': () => {
      // ...
    },
  },
});

validator.on('validate:start', () => {
  document.querySelectorAll('.validator-err').forEach((el) => {
    el.remove();
  });
});

validator.on('error:field', (_form: HTMLFormElement, element: HTMLElement, errors: ErrorDetail[]) => {
  errors.reverse().forEach((error) => {
    const messageElement = document.createElement('p');
    messageElement.classList.add('validator-err');
    messageElement.innerHTML = error.message;

    if (element.parentNode) {
      element.parentNode.insertBefore(messageElement, element.nextSibling);
    }
  });
});
