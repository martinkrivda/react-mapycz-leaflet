import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs', // ✅ CommonJS (for Node.js)
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'es', // ✅ ES Module (for Webpack)
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    json(),
    postcss(),
  ],
  external: ['react', 'react-dom', 'leaflet', 'react-leaflet'],
};
