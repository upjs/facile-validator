/// <reference types="vite/client" />

import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/Validator.ts'),
      name: 'Validator',
      fileName: (format) => `validator.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // external: ['react', 'axios', 'form-serialize'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          // react: 'React'
        },
      },
    },
  },
  test: {
    // include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  },
});
