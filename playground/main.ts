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
  onFieldChangeValidation: true,
  onFieldChangeValidationDelay: 500,
  xRules: {
    zipcode: /^([0-9]{5})-([0-9]{5})$/,
    myZipCode: {
      errorText: (field) => {
        console.log(field.value);
        return 'My custom error message';
      },
      pattern: '/^([0-9]{5})-([0-9]{5})$/',
    },
    'min-from-server': 5,
  },
  on: {
    'validation:success': () => {
      alert('Success! Form validated without any errors');
    },
    'validation:end': () => {
      console.log('validation:end');
    },
    'validation:start': () => {
      console.log('validation:start');
    },
    'validation:failed': () => {
      console.log('validation:failed');
    },
    'field:error': () => {
      console.log('field:error');
    },
  },
});
