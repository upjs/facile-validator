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
    zipcode: '/^([0-9]{5})-([0-9]{5})$/',
    'min-from-server': (() => '2')(),
  },
  on: {
    'validation:success': () => {
      alert('Success! Form validated with no errors');
    },
  },
});
