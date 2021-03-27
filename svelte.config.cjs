const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');
const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');
const postcss = require('./postcss.config.cjs');
const mdsvexConfig = require('./mdsvex.config.cjs');
const image = require('svelte-image');

const preprocess = [
  image({ placeholder: 'blur', optimizeRemote: true }),
  sveltePreprocess({
    defaults: {
      script: 'typescript',
      style: 'postcss',
    },
    postcss,
    preserve: ['ld+json'],
  }),
];

module.exports = {
  // an array of file extensions that should be treated as Svelte components
  extensions: ['.svelte', ...mdsvexConfig.extensions],
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
