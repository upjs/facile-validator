import './style.css';
import { Validator, enLocale } from '@/index';
import { ErrorDetail } from '@/types';

const validator = new Validator('form', { locale: enLocale });

validator.on('validate:start', () => {
  document.querySelectorAll('.validator-err').forEach((el) => {
    el.remove();
  });
});

validator.on('error:field', (element: HTMLElement, errors: ErrorDetail[]) => {
  const elem = element as HTMLInputElement;

  errors.reverse().forEach((error) => {
    const messageElement = document.createElement('p');
    messageElement.classList.add('validator-err');
    messageElement.innerHTML = error.message;

    if (elem.parentNode) {
      elem.parentNode.insertBefore(messageElement, elem.nextSibling);
    }
  });
});
