module.exports = {
  root: true,
  env: {
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended', // accessibility。ウェブページの活用しやすさ。imgタグにalt属性が必要など
    'next',
    'next/core-web-vitals',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  plugins: ['simple-import-sort', 'tailwindcss'], // https://sunday-morning.app/posts/2020-10-31-eslint-import-auto-sort
  rules: {
    'no-restricted-syntax': ['error', { selector: 'TSEnumDeclaration', message: "Don't declare enums" }], // enumを禁止にする
    'prefer-arrow-callback': 'error', // callbackにアロー関数を強要する
    'prefer-const': 'error',
    'func-style': ['error', 'expression'], // function foo() ⇒ var foo = function()
    'no-restricted-imports': ['error', { paths: [{ name: 'react', importNames: ['default'] }] }], // import React from 'react';を許容しない
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off', // import {ReactNode} from 'react';を許容。import React, {ReactNode} from 'react';
    'react/display-name': 'error', // Componentで関数をリターンする場合、名前を付ける必要がある https://www.ted027.com/post/react-display-name/
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true, // ローカル変数に定義されたhandlerをチェックする
        checkInlineFunction: true, // インライン関数として設定されたイベントハンドラをチェックする
      },
    ],
    // 'react/destructuring-assignment': ['error', 'never'], // props/state/contextの分割代入禁止。適用するかは保留
    'react-hooks/rules-of-hooks': 'error', // トップレベルで呼び出すなどの基本ルール
    'react-hooks/exhaustive-deps': 'warn', // 第二引数を与えないと警告
    'import/newline-after-import': 'error', // importの後は一行改行を入れる
    // 'import/no-default-export': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-explicit-any': 'off', // any型を許容しない
    '@typescript-eslint/no-var-requires': 'off', // var foo = require('foo'); ⇒ import foo = require('foo');
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 関数の戻り値の型を強要する
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }], // typeをimportする際にtype importとする
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: ['typeAlias', 'typeParameter'], format: ['PascalCase'] },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['no', 'is', 'has', 'should'],
        filter: { regex: '^_', match: false },
      },
    ],
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
  overrides: [
    // 特定のルールを除外したい場合の記述
    {
      files: ['src/pages/**/*.tsx', 'src/pages/api/**/*.ts'],
      rules: { 'import/no-default-export': 'off' },
    },
  ],
};
