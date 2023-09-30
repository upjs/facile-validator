import { resolve } from 'path';
import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';
import presetWind from '@unocss/preset-wind';

export default defineConfig({
  root: resolve(__dirname, './'),
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '~': resolve(__dirname, './'),
    },
  },
  base: 'https://upjs.github.io/facile-validator/',
  plugins: [
    Unocss({
      presets: [presetWind()],
      theme: {
        colors: {
          primary: '#ef233c',
          heading: '#023047',
        },
        fontFamily: {
          roboto: 'Roboto, sans-serif',
        },
      },
      shortcuts: {
        /* eslint-disable prettier/prettier */
        input:
          'mt-1 bg-gray-50 rounded-md px-3 py-1.5 transition transition-all outline-transparent focus:outline-primary border border-gray-100 focus:border-primary placeholder:text-sm text-heading',
        label: 'ml-2 text-heading text-base font-medium',
        'label-not-inner': 'text-heading text-base font-medium',
        'form-control': 'flex flex-col w-full',
        'validator-err': 'text-primary text-sm mt-2 ml-2',
        /* eslint-enable prettier/prettier */
      },
      safelist: ['validator-err'],
    }),
  ],
});
