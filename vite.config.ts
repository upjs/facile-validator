/// <reference types="vite/client" />
/// <reference types="vitest" />

import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './playground'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => {
        if (format === 'es') return `facile-validator.mjs`;
        if (format === 'cjs') return `facile-validator.cjs`;
        return `facile-validator.${format}.js`;
      },
    },
  },
  test: {
    // include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  },
});
