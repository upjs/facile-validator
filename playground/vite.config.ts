import { resolve } from 'path';
import { defineConfig } from 'vite';
import viteConfig from '../vite.config';

export default defineConfig({
  ...viteConfig,
  root: resolve(__dirname, './'),
  publicDir: resolve(__dirname, './public'),
  build: undefined,
  base: 'https://upjs.github.io/easy-html-form-validator/',
});
