import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended, // Standard JS rules
  {
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      react,
      'react-hooks': reactHooks,
      prettier,
    },
    rules: {
      'prettier/prettier': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
