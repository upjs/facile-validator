```tsx
import { Validator, enLang as en } from '@upjs/facile-validator';
import { useEffect, useRef } from 'react';

function App() {
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

export default App;
```
