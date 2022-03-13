import { resolve } from 'path';
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  declaration: true,
  entries: ['src/index'],
  alias: {
    '@': resolve(__dirname, './src'),
    '~': resolve(__dirname, './playground'),
  },
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
});
