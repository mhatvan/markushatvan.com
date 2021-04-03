const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');
const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');
const postcss = require('./postcss.config.cjs');
const { mdsvex } = require(`mdsvex`);
const { imagetools } = require('vite-imagetools');

const extensions = [`.svelte`, '.md', `.mdx`, '.svx'];

const preprocess = [
  imagetools({ force: true }),
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
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
};
