import { spawn } from 'child_process';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup';
import image from 'svelte-image';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import pkg from './package.json';
const postcss = require('./postcss.config');
// import analyze from 'rollup-plugin-analyzer';
// import visualizer from 'rollup-plugin-visualizer';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const sourcemap = dev ? 'inline' : false;
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const preprocess = [
  mdsvex(),
  image({ placeholder: 'blur', optimizeRemote: true }),
  sveltePreprocess({
    defaults: {
      script: 'typescript',
      style: 'postcss',
    },
    sourceMap: !!sourcemap,
    postcss,
    preserve: ['ld+json'],
  }),
];

// Changes in these files will trigger a rebuild of the global CSS
const globalCSSWatchFiles = [
  'postcss.config.js',
  'tailwind.config.js',
  'src/global.pcss',
];

const onwarn = (warning, onwarn) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

export default {
  client: {
    input: config.client.input().replace(/\.js$/, '.ts'),
    output: { ...config.client.output(), sourcemap },
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        compilerOptions: {
          dev,
          hydratable: true,
        },
        extensions: ['.svelte', '.svx'],
        preprocess,
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs({
        sourceMap: !!sourcemap,
      }),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/@babel/**', 'node_modules/@fortawesome/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-optional-chaining',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      typescript({ sourceMap: !!sourcemap }),
      json(),

      !dev &&
        terser({
          module: true,
        }),

      (() => {
        let builder;
        let rebuildNeeded = false;

        const buildGlobalCSS = () => {
          if (builder) {
            rebuildNeeded = true;
            return;
          }
          rebuildNeeded = false;

          try {
            builder = spawn('node', [
              '--experimental-modules',
              '--unhandled-rejections=strict',
              'build-global-css.mjs',
              sourcemap,
            ]);
            builder.stdout.pipe(process.stdout);
            builder.stderr.pipe(process.stderr);

            builder.on('close', (code) => {
              if (code !== 0) {
                console.error(`global css builder exited with code ${code}`);
              }

              builder = undefined;

              if (rebuildNeeded) {
                buildGlobalCSS();
              }
            });
          } catch (err) {
            console.error(err);
          }
        };

        return {
          name: 'build-global-css',
          buildStart() {
            buildGlobalCSS();
            globalCSSWatchFiles.forEach((file) => this.addWatchFile(file));
          },
          generateBundle: buildGlobalCSS,
        };
      })(),

      // analyze({
      //   summaryOnly: true,
      // }),
      // visualizer(),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: { server: config.server.input().server.replace(/\.js$/, '.ts') },
    output: { ...config.server.output(), sourcemap },
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
        'module.require': 'require',
      }),
      svelte({
        compilerOptions: {
          dev,
          generate: 'ssr',
          hydratable: true,
        },
        emitCss: false,
        extensions: ['.svelte', '.svx'],
        preprocess,
      }),
      resolve({
        dedupe: ['svelte'],
      }),
      commonjs({
        sourceMap: !!sourcemap,
      }),
      typescript({ sourceMap: !!sourcemap }),
      json(),
      // analyze({
      //   summaryOnly: true,
      // }),
      // visualizer(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules ||
        Object.keys(process.binding('natives')),
    ),

    preserveEntrySignatures: 'strict',
    onwarn,
  },

  // serviceworker: {
  //   input: config.serviceworker.input().replace(/\.js$/, '.ts'),
  //   output: { ...config.serviceworker.output(), sourcemap },
  //   plugins: [
  //     resolve(),
  //     replace({
  //       'process.browser': true,
  //       'process.env.NODE_ENV': JSON.stringify(mode),
  //     }),
  //     commonjs({
  //	     sourceMap: !!sourcemap,
  //	   }),
  //     typescript({ sourceMap: !!sourcemap }),
  //     !dev && terser(),
  //   ],

  //   preserveEntrySignatures: false,
  //   onwarn,
  // },
};
