# Facile Validator

_This documentation is being completed..._

Laravel-inspired validation for HTML forms, built for simplicity of use: 😋

<img src="./misc/intro.jpg" />
Facile (French word for "easy", pronounced `fa·sil`) is an HTML form validator that is inspired by Laravel's validation style and is designed for simplicity of use.

**[DEMO](https://upjs.github.io/facile-validator/)**

## Installation

```bash
$ npm i @upjs/facile-validator
```

## Usage:
HTML:
```html
<form>
  <input data-rules="bail|required|number|between:1,10" />
</form>
```

JavaScript:

```javascript
import { Validator, enLang as en } from '@upjs/facile-validator';

const form = document.querySelector('form');
const validator = new Validator(form, {
  lang: en,
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validator.validate();
});
```
Now every input with `data-rules` attribute in the `form` will be validated.

## Available Validation Rules:


| Rule          | If presents   |
| ------------- | ------------- |
| `accpepted`   | The input (checkbox, radio) must be checked  |
| `required`    | The input must be filled  |
| `alpha`       | The input value must contain only alphabetic characters   |
| `alpha-num`   | The input value must contain only alpha-numeric characters   |
| `alpha-num-dash`    | The input value must contain only alpha-numeric characters, dashes, and underscores  |
| `between`     | The input value must be a number between the given range  |
| `digits`      | The input value must be a number with the given length  |
| `email`       | The input value must be an email |
| `ends-with`   | The input value must end with the given substring |
| `int`         | The input value must be an integer (positive or negative) |
| `int`         | The input value must be an integer (positive or negative) |
| `max`         | With the combination with the `number` rule, the input value must be a number less than or equal to the given number. <br/> If used without `number` rule, the input value is considerd as a string and then the input value must be a string with a maximum length of the given number |
| `min`         | With the combination with the `number` rule, the input value must be a number greater than or equal to the given number. <br/> If used without `number` rule, the input value is considerd as a string and then the input value must be a string with a minimum length of the given number |
| `num-dash`    | The input value must contain only numeric characters, dashes, and underscores  |
| `number`      | The input value must be a number |
| `required`    | The input must be filled  |
| `size`        | With the combination with the `number` rule, the input value must be a number equal to the given number. <br/> If used without `number` rule, the input value is considered as a string and then the input value must be a string with the exact length of the given number  |
| `starts-with` | The input value must start with the given substring |
| `in`          | The input value must be in list of given values |


#### `required`

Validate that an input is filled or not.

```html
<input data-rules="required" />
```

#### `min:number`

The minimum value for this input must be `number`.

```html
<input data-rules="min:5" />
```

Here the user can't enter numbers below 5:

#### `email`

The input value must be an email

```html
<input data-rules="email" />
```

#### `between:min,max`

The input value must be a number between `min` and `max`.

```html
<input data-rules="between:1,10" />
```

Here only numbers between 1 and 10 are accepted.

#### `number`

The input value must be a valid number.

```html
<input data-rules="number" />
```

Here only numbers like `1` or `10.5` are accepted.

#### `int`

The input value must be a valid integer.

```html
<input data-rules="integer" />
```

Here only numbers like `1` or `2` are accepted.

#### `integer`

The same as `int`.

#### `bail`

If a set of rules contains `bail` rule, the validation for the input will be stopped as soon as a rule fails, and then other rules will not be processed.

```html
<form>
  <input data-rules="bail|required|number|between:1,10">
</form
```

In this example, at first `required` rule will be processed and if it fails, other rules will not be processed.

## To-do

- More validation rules
- Styling
- Custom configuration
- Localization
- Test

## License

MIT
