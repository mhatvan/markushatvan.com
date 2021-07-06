import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { imagetools } from 'vite-imagetools';

const extensions = [`.svelte`, '.svx'];

const preprocess = [
  sveltePreprocess({
    defaults: {
      script: 'typescript',
      style: 'postcss',
    },
    postcss: true,
    preserve: ['ld+json'],
  }),
  mdsvex({ extensions: extensions }),
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: extensions,
  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: preprocess,
  kit: {
    adapter: adapter(),
    target: '#svelte',
    vite: {
      plugins: [imagetools({ force: true })],
    },
    trailingSlash: 'ignore',
  },
};

export default config;
