# Facile Validator

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![verify](https://github.com/upjs/facile-validator/actions/workflows/verify.yml/badge.svg?branch=main)](https://github.com/upjs/facile-validator/actions/workflows/verify.yml)
[![License][license-src]][license-href]

Robust Frontend Form Validation, inspired by Laravel Validation, Built for Simplicity of Use 😋

<p align="center">
  <img src="./misc/intro.jpg" />
</p>

Facile (French word for "easy", pronounced `fa·sil`) is an HTML form validator that is inspired by Laravel's validation style and is designed for simplicity of use.

**[DEMO](https://upjs.github.io/facile-validator/)**

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Validate on Field Change](#validate-on-field-change)
  - [Implementation in Frameworks](#implementation-in-frameworks)
- [Handling Events](#handling-events)
- [Available Validation Rules](#available-validation-rules)
- [X-Prefixed Rules](#x-prefixed-rules)
- [Localization](#localization)

> Note: This package does not include any polyfills. If you want to use in old environments, add this package to your project's config transpiling list.
> <br/>

## Installation

```bash
npm i @upjs/facile-validator

# or
yarn add @upjs/facile-validator
```

<br/>

## Usage

HTML:

```html
<form>
  <input data-rules="bail|required|number|between:1,10" />
</form>
```

The rules for each field are separated with a pipe character (vertical line) `|`. In this example, we've assigned 4 rules for that `input`:

- bail
- required
- number
- between (with two arguments: 1 and 10)

<br/>

JavaScript:

```javascript
import { Validator, enLang as en } from '@upjs/facile-validator';

// Select the container element that contains the fields
const form = document.querySelector('form');

// Create an instance of Validator for the container element
const v = new Validator(form, {
  lang: en,
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Call validate method to start validation
  v.validate();
});

// Handle error-free validation
v.on('validation:success', () => {
  alert('Nice! The form was validated without any errors');
  console.log(v.values());
});

// Handle failed validation
v.on('validation:failed', () => {
  alert('Oops! There are some errors in the form.');
});
```

Now every input with `data-rules` attribute in the `form` will be validated.

<br/>

### Validate on Field Change

_New in version 1.6_  
By default, the validation starts when the `validate` method is called. If you want to validate a field as soon as it changes (e.g. when user starts typing) you can set the value of `onFieldChangeValidation` option to `true` in the validator's options:

```js
const v = new Validator(form, {
  onFieldChangeValidation: true,
}
```

By doing this, the validation starts for the field that being changed after 500ms delay. However, you can change this delay by setting `onFieldChangeValidationDelay` in the options:

```js
const v = new Validator(form, {
  onFieldChangeValidation: true,
  onFieldChangeValidationDelay: 1000 // 1 Second
}
```

<br/>

### Getting Field Values

Use `values()` method from the validator to get the values of all fields in the form:

```javascript
const values = v.values();
console.log(values);
// { field1: 'value1', field2: 'value2', ... }
```

### Implementation in Frameworks

- [React.js](/misc/code-examples/react.md)
- _Others soon..._

<br/>

## Handling Events

When the validation starts, ends, succeeds or fails, there are easy ways to handle these events. We do this with the help of the **Hooks**.
A hook is simply a function that you define to be executed when a particular event occurs.

There are five type of events that can be handled with the hooks:

- [`validation:start`](#validationstart)
- [`validation:end`](#validationend)
- [`validation:success`](#validationsuccess)
- [`validation:failed`](#validationfailed)
- [`field:error`](#fielderror)

To attach a hook to these events, use `on` method:

```javascript
v.on(event_name, () => {
  // This function will be executed when the respective event occurs.
});
```

You can also attach those hooks in the config object:

```javascript
const v = new Validator(form, {
  // ...
  on: {
    'validation:success': () => {
      alert('Success! Form validated with no errors');
    },
    'validation:failed': () => {
      alert('failed.');
    },
  },
});
```

---

#### `validation:start`

As you might have guessed, this event will occur when the validation starts:

```javascript
v.on('validation:start', (form) => {
  // This function will be executed when the validation starts
});
```

---

#### `validation:end`

This event will occur when the validation ends, no matter if it was successful or not:

```javascript
v.on('validation:end', (form, isSuccessful) => {
  // This function will be executed when the validation ends
});
```

---

#### `validation:success`

This event will occur when the validation ends with no errors:

```javascript
v.on('validation:success', (form) => {
  // Do something after successful validation e.g. send the form-data to the server
});
```

---

#### `validation:failed`

This event will occur when the validation ends while there are some errors in the form:

```javascript
v.on('validation:failed', (form) => {
  // Notify the user to fix the form
});
```

---

#### `field:error`

When a particular field has errors, you can handle the errors with this event:

```javascript
v.on('field:error', (form, field, errors) => {
  errors.forEach((error) => {
    console.log(error.args);
    console.log(error.message);
    console.log(error.rule);
    console.log(error.element);
  });
});
```

This is a good place to display errors in your own format. By default, the validator automatically shows error messages below each input. However, you can disable this feature by setting `renderErrors` option to `false` in the config object:

```javascript
const v = new Validator(form, {
  renderErrors: false,
});
```

<br />

## Available Validation Rules:

- [accepted](#accepted)
- [alpha](#alpha)
- [alpha-num](#alpha-num)
- [alpha-num-dash](#alpha-num-dash)
- [bail](#bail)
- [between](#between)
- [digits](#digits)
- [email](#email)
- [ends-with](#ends-with)
- [int](#int)
- [max](#max)
- [min](#min)
- [num-dash](#num-dash)
- [number](#number)
- [nullable](#nullable)
- [regex](#regex)
- [required](#required)
- [size](#size)
- [starts-with](#starts-with)
- [in](#in)
- ...
- [Your rule?](https://github.com/upjs/facile-validator/pulls)

---

### accepted

The field under validation (checkbox, radio) must be checked:

```html
<input data-rules="accepted" />
```

---

### alpha

The field under validation must contain only alphabetic characters:

```html
<input data-rules="alpha" />
```

Some valid inputs:

- Hello
- français
- سلام

---

### alpha-num

The field under validation must contain only alpha-numeric characters:

```html
<input data-rules="alpha-num" />
```

Some valid inputs:

- abc123
- abc
- 123

---

### alpha-num-dash

The field under validation must contain only alpha-numeric characters, dashes, and underscores:

```html
<input data-rules="alpha-num-dash" />
```

Some valid inputs

- abc-123
- abc_123
- abc123
- abc
- 123

---

### bail

Stops running validation rules for the field after the first validation failure:

```html
<input data-rules="bail|required|number|between:1,10" />
```

_`required` rule will be processed and if it fails, other rules will not be processed._

---

### between

The field under validation must be a number between the given range:

```html
<input data-rules="between:1,10" />
```

_The numbers lower than 1 and higher than 10 are not accepted._

---

### digits

The field under validation must be a number with the given length:

```html
<input data-rules="digits:10" />
```

_Only a number with the length of 10 is accepted (e.g. 1234567890)_

---

### email

The field under validation must be an email:

```html
<input data-rules="email" />
```

---

### ends-with

The field under validation must end with the given substring:

```html
<input data-rules="ends-with:ies" />
```

_Only the words that end with <u>ies</u> (technologies, parties, allies, ...) are accepted._

---

### int

The field under validation must be an integer (positive or negative):

```html
<input data-rules="int" />
```

_You can also use `integer` rule._

---

### max

This rule is used for multiple purposes.

In the combination with the `number` rule, the field under validation must be a number less than or equal to the given number:

```html
<input data-rules="number|max:50" />
```

_Only a number less than or equal to 50 are accepted._

If `max` is used without `number` rule, the field under validation is considered as a `string` and then the field under validation must be a string with a maximum length of the given number:

```html
<input data-rules="max:5" />
```

_Only strings with the length of 5 or less are accepted._

---

### min

This rule is used for multiple purposes.

In the combination with the `number` rule, the field under validation must be a number greater than or equal to the given number:

```html
<input data-rules="number|min:50" />
```

_Only a number greater than or equal to 50 will be accepted._

If `min` rule is used without `number` rule, the field under validation is considered as a string and then The field under validation must be a string with a minimum length of the given number.

```html
<input data-rules="min:5" />
```

_Only strings with the length of 5 or higher will be accepted._

---

### nullable

The field under validation can be empty:

```html
<input data-rules="nullable|min:5" />
```

`min` rule will not be processed unless the field is filled. Note that the rules order is important. In this example, if `nullable` rule comes after `min` rule, the validator first processes `min` rule and then `nullable` rule.

---

### num-dash

The field under validation must contain only numeric characters, dashes, and underscores:

```html
<input data-rules="num-dash" />
```

_1000, 123-456, 123_456 are some valid inputs for this rule._

---

### number

The field under validation must be a number:

```html
<input data-rules="number" />
```

---

### regex

_New in version 1.1_  
The field under validation must match the given regular expression:

```html
<input data-rules="regex:/^[0-9]+$/" />
```

To handle the regex rule in a more convenient way, see [#x-prefixed-rules](#x-prefixed-rules).

---

### required

The field under validation must not be empty:

```html
<input data-rules="required" />
```

---

### size

This rule is used for multiple purposes.

In the combination with the `number` rule, the field under validation must be a number equal to the given number:

```html
<input data-rules="number|size:1000" />
```

_Only 1000 is accepted._

If used without `number` rule, the field under validation is considered as a string and then the field under validation must be a string with the exact length of the given argument:

```html
<input data-rules="size:5" />
```

_Only the strings with the length of 5 are accepted._

---

### starts-with

The field under validation must start with the given substring:

```html
<input data-rules="starts-with:app" />
```

_Only the words that start with <u>app</u> (apple, application, append, ...) are accepted._

---

### in

The field under validation must be in the list of the given arguments:

```html
<input data-rules="in:red,green,blue" />
```

_Only red or green or blue are valid inputs._

`in` rule can also be used with a `<select multiple>` element. In this case, `in` rule should be used with `array` rule:

```html
<select data-rules="array|in:1,3" name="names[]" multiple>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
```

_Only 1, 3 or both are accepted._

---

<br/>

## X-Prefixed Rules

_New in version 1.1_  
In some situations, passing the rule argument in HTML is not a good idea. For example for a complex argument for `regex` rule that can make the HTML code less legible:

```html
<input data-rules="regex:/^([0-9]{5})-([0-9]{5})$/" />
```

So instead of passing rules arguments in HTML, you can pass them in JavaScript code with the help of **X-Prefixed Rules**. All available rules can be prefixed with an `x-`. For example the `regex` rule can be written as `x-regex`. In this situation, the only argument for these rules points a key in `xRules` object in the configuration object:

```html
<input data-rules="x-regex:zipcode" />
```

```js
const v = new Validator(form, {
  xRules: {
    zipcode: /^([0-9]{5})-([0-9]{5})$/,
  },
});
```

In this example, the final argument for `x-regex` rule is the value of `zipcode` property in `xRules` object.

### Custom error messages

_New in version 1.12.0_

Previously, if an x-regex rule failed, a generic error message 'The value doesn't match the pattern' was displayed. For more convenience, you can now show your own error messages based on arbitrary conditions. To do so, use the `x-regex` rule like the below (see `password`):

```js
const v = new Validator(form, {
  xRules: {
    // Simple x-regex rule with pre-defined error
    zipcode: /^([0-9]{5})-([0-9]{5})$/,

    // An x-regex rule with customized errors
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
});
```

Open [the demo](https://upjs.github.io/facile-validator/) and play with the password field.

---

<br/>

## Localization

When instantiating the `Validator` class, importing a language is mandatory. This allows you to keep the bundle size as minimal as possible by including only the desired language:

```javascript
import { Validator, enLang as en } from '@upjs/facile-validator';

const form = document.querySelector('form');
const v = new Validator(form, {
  lang: en,
});
```

Facile Validator currently supports these languages by default:

- English (import with `enLang`)
- Persian (import with `faLang`)
- Italian (import with `itLang`) (Since v1.8)
- Chinese (import with `zhLang`) (Since v1.8)
- French (import with `frLang`) (Since v1.8)
- German (import with `deLang`) (Since v1.8)
- Czech (import with `csLang`) (Since v1.9)
- Dutch (import with `nlLang`) (Since v1.10)

We welcome any contributions for other languages. The languages are located in [this path](https://github.com/upjs/facile-validator/blob/main/src/locales). Just copy any file, translate it into your own language and then make a **PR**.

<br>

### Using your own language

Use `createLang` function to define your own error messages:

```javascript
import { Validator, enLang as en, createLang } from '@upjs/facile-validator';

const myLang = createLang({
  required: 'Please fill out this field',
  accepted: 'Please accept this field',
});

const v = new Validator(form, {
  lang: myLang,
});
```

Note that in this case you should define a message for each existing rule. Although, to override only certain messages, pass the original language object:

```javascript
import { Validator, enLang as en, createLang } from '@upjs/facile-validator';

const myLang = createLang({
  ...en,
  required: 'Please fill out this field',
  accepted: 'Please accept this field',
});
```

<br>

### Change the Language on the fly

_New in version 1.8.0_  
You can change the current language on runtime by using `setLanguage` method from the validator:

```javascript
import { Validator, enLang as en, frLang as fr } from '@upjs/facile-validator';

const v = new Validator(form, {
  lang: en,
});

// e.g. onclick
v.setLanguage(fr);
```

## License

MIT

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@upjs/facile-validator/latest.svg
[npm-version-href]: https://npmjs.com/package/@upjs/facile-validator
[npm-downloads-src]: https://img.shields.io/npm/dt/@upjs/facile-validator.svg
[npm-downloads-href]: https://npmjs.com/package/@upjs/facile-validator
[github-actions-ci-src]: https://github.com/upjs/facile-validator/workflows/verify/badge.svg
[github-actions-ci-href]: https://github.com/upjs/facile-validator/actions/workflows/verify.yml
[license-src]: https://img.shields.io/npm/l/@upjs/facile-validator.svg
[license-href]: https://npmjs.com/package/@upjs/facile-validator
