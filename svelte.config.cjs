const sveltePreprocess = require('svelte-preprocess');
const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');
const postcss = require('./postcss.config.cjs');
const { mdsvex } = require(`mdsvex`);
const { imagetools } = require('vite-imagetools');

const extensions = [`.svelte`, '.svx'];

const preprocess = [
  sveltePreprocess({
    defaults: {
      script: 'typescript',
      style: 'postcss',
    },
    postcss,
    preserve: ['ld+json'],
  }),
  mdsvex({ extensions: extensions }),
];

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  extensions: extensions,
  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: preprocess,
  kit: {
    adapter: static(),
    target: '#svelte',
    vite: {
      plugins: [imagetools({ force: true })],
    },
  },
};
