You can easily integrate Facile Validator into an existing React project by utilizing the `useEffect` and `useRef` hooks

1. Create a ref object by using `useRef` hook
2. Attach the ref to the container element (e.g. `<form>` element)
3. Add implementation logic inside a `useEffect` hook with the ref object as a dependency

```tsx
import { Validator, enLang as en } from '@upjs/facile-validator';
import { useEffect, useRef } from 'react';

export function MyReactComponent() {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!form.current) return;

    const v = new Validator(form.current, {
      lang: en,
    });

    form.current.addEventListener('submit', (e) => {
      e.preventDefault();

      // Call validate method to start validation
      v.validate();
    });

    v.on('validation:success', () => {
      alert('Nice! The form was validated without any errors');
    });
  }, [form]);

  return (
    <>
      <form ref={form}>
        <input data-rules="bail|required|number|between:1,10" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
```
