module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    browser: true,
    node: true,
    commonjs: true,
    jest: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    impliedStrict: true,
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
  rules: {
    /*
     * ####################
     * default eslint rules
     * ####################
     */
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: 'next',
      },
    ],
    semi: ['error', 'always'],
    eqeqeq: ['warn', 'always'],
    'no-alert': 'error',
    'no-useless-constructor': 'error',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'prefer-template': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'no-var': 'error',
    radix: 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
};
