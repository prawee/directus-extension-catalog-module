import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

export default {
	input: 'src/index.js',
	output: {
		format: 'es',
		// file: 'dist/index.js',
		file: '../../extensions/modules/catalog/dist/index.js',
	},
	external: ['vue', '@directus/extension-sdk'],
	plugins: [vue(), nodeResolve(), commonjs(), terser()],
};