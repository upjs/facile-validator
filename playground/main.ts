import '@unocss/reset/tailwind.css';
import 'uno.css';
import { Validator, enLang } from '@/index';

const form = document.querySelector('form') as HTMLElement;

form.onsubmit = (e) => {
  e.preventDefault();
  v.validate();
};

const v = new Validator(form, {
  lang: enLang,
  xRules: {
    regex: '/^[a-zA-Z0-9]*$/',
  },
  on: {
    'validation:success': () => {
      alert('Success! Form validated with no errors');
    },
  },
});
