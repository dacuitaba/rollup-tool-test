import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import * as path from 'path';

export default {
  input: path.join(__dirname, 'src', 'main.ts'),
  output: [
    {
      file: path.join(__dirname, 'dist', 'umd', 'my-lib.umd.js'),
      name: 'zDesign',
      format: 'umd',
      globals: {
        react: 'React', // 这跟external 是配套使用的，指明global.React即是外部依赖react
      },
    },
    {
      file: path.join(__dirname, 'dist', 'es', 'my-lib.esm.js'),
      format: 'esm',
      globals: {
        react: 'React', // 这跟external 是配套使用的，指明global.React即是外部依赖react
      },
    },
    {
      file: path.join(__dirname, 'dist', 'cjs', 'my-lib.cjs.js'),
      format: 'cjs',
      globals: {
        react: 'React', // 这跟external 是配套使用的，指明global.React即是外部依赖react
      },
    },
  ],
  plugins: [
    typescript(),
    babel({
      exclude: '**/node_modules/**',
    }),
    commonjs(),
  ],
  external: ['react', 'react-dom'],
};
