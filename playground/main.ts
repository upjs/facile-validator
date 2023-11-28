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
    zipcode: {
      value: '/^([0-9]{5})-([0-9]{5})$/',
      errorMessage: 'Invalid zipcode',
    },
    password: {
      value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&*]).{8,}$/,
      errorMessage: (field) => {
        if (field.value.length < 8) {
          return 'Password must be at least 8 characters';
        }

        if (!/[A-Z]/.test(field.value)) {
          return 'Password must contain at least one uppercase letter';
        }

        if (!/[a-z]/.test(field.value)) {
          return 'Password must contain at least one lowercase letter';
        }

        if (!/[@#$%^&*]/.test(field.value)) {
          return 'Password must contain at least one special character';
        }

        return 'My custom error message';
      },
    },
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
