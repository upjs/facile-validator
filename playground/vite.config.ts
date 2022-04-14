import { resolve } from 'path';
import { defineConfig } from 'vite';
import postcss from '../postcss.config.js';

export default defineConfig({
  root: resolve(__dirname, './'),
  css: {
    postcss,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '~': resolve(__dirname, './'),
    },
  },
  base: 'https://upjs.github.io/facile-validator/',
});
