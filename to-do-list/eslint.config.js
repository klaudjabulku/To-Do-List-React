
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  settings: {
    react: { version: '18.3' },
  },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh'
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  ignorePatterns: ['dist'],
};
