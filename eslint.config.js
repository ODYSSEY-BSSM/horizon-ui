import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import importPlugin from 'eslint-plugin-import'

export default [
  {
    ignores: ['dist', 'node_modules', 'storybook-static', '*.config.js'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // TypeScript 규칙
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // 컨벤션 규칙 추가

      // 세미콜론 필수
      semi: ['error', 'always'],

      // 싱글 따옴표
      quotes: ['error', 'single'],

      // React 컴포넌트 화살표 함수 강제
      'prefer-arrow-callback': 'error',
      'func-style': ['error', 'expression'],

      // import 순서 정렬 (simple-import-sort 사용)
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1. Node.js 내장 모듈
            ['^node:'],
            // 2. 외부 라이브러리 (react 우선)
            ['^react', '^@?\\w'],
            // 3. 내부 절대 경로 (@로 시작)
            ['^@/'],
            // 4. 상대 경로
            [
              '^\\.\\.(?!/?$)',
              '^\\.\\./?',
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?',
            ],
            // 5. 타입 imports
            ['^.+\\u0000'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',

      // 기타 코드 스타일
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-spacing': ['error', { before: false, after: true }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

      // React 관련
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',

      // 기타 금지 규칙
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-alert': 'error',
    },
  },
]
