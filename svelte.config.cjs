const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');
const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');
const postcss = require('./postcss.config.cjs');
const { mdsvex } = require(`mdsvex`);
const { imagetools } = require('vite-imagetools');
const path = require('path');

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

module.exports = {
  extensions: extensions,
  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: preprocess,
  kit: {
    adapter: node(),
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          $static: path.resolve('src/static'),
        },
      },
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
      plugins: [imagetools({ force: true })],
    },
  },
};
