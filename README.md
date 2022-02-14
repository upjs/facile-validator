# Easy JavaScript Form Validator
*This documentation is being completed...*

Laravel-inspired validation for HTML forms:
```html
<form>
  <input v-rules="bail|required|number|between:1,10">
</form>
```

Easily chain validation rules with `|`.

## Available Validation Rules:
#### `required`
Whether an input is filled or not.
```html
<input v-rules="required">
```

#### `min:number`
The minimum value for this input must be `number`.  
For example, the user can't enter numbers below 5:
```html
<input v-rules="min:5">
```
