import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default props => ({
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      typescript: require('typescript'),
    }),
    filesize(),
  ],
  ...props,
});
