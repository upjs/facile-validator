# Easy HTML Form Validator

_This documentation is being completed..._

**[DEMO](https://alin11.github.io/misc/easy-html-form-validator/)**

Laravel-inspired validation for HTML forms:

```html
<form>
  <input data-rules="bail|required|number|between:1,10" />
</form>
```

Easily chain validation rules with `|`.

## Installation

```
$ npm i easy-html-form-validator
```

## Usage:

HTML:

```html
<form id="my-form">
  <input data-rules="bail|required|number|between:1,10" />
</form>
```

JavaScript:

```javascript
import Validator from 'easy-html-form-validator';

new Validator('#my-form');
```

## Available Validation Rules:

#### `required`

Whether an input is filled or not.

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
