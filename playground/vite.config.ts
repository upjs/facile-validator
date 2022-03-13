import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: resolve(__dirname, './'),
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '~': resolve(__dirname, './'),
    },
  },
  base: 'https://upjs.github.io/facile-validator/',
});
