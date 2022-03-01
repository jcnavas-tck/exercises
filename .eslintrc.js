module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'space-before-function-paren': 0,
    'comma-dangle': 0
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  }
}
