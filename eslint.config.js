import { config } from '@fisch0920/config/eslint'

export default [
  ...config,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'react/prop-types': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/prefer-global-this': 'off',
      'no-process-env': 'off',
      'array-callback-return': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/media-has-caption': 'off',
      'jsx-a11y/interactive-supports-focus': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      'simple-import-sort/imports': 'off',
      'unicorn/catch-error-name': 'off',
      'unicorn/new-for-builtins': 'off',
      'react/jsx-no-comment-textnodes': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'import/no-named-as-default-member': 'off'
    }
  }
]
