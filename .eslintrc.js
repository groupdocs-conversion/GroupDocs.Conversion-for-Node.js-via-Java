module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'script', // CommonJS
  },
  rules: {
    // Code style
    'indent': ['error', 2, { SwitchCase: 1 }],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'eol-last': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    
    // Best practices
    'no-console': 'off', // Console.log is used for examples
    'no-unused-vars': ['error', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'off', // CommonJS uses regular functions
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    
    // Spacing
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'curly': ['error', 'all'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    
    // Naming conventions
    'camelcase': ['error', {
      properties: 'always',
      ignoreDestructuring: false,
      ignoreImports: false,
      ignoreGlobals: false,
    }],
    
    // CommonJS specific
    'no-process-env': 'off', // process.env is used for configuration
    
    // Async/await
    'require-await': 'off', // Functions return promises that are awaited by callers
    'no-async-promise-executor': 'error',
    
    // Code quality
    'eqeqeq': ['error', 'always'],
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-return-await': 'error',
    'prefer-promise-reject-errors': 'error',
    
    // Formatting
    'max-len': ['warn', {
      code: 120,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'max-lines-per-function': ['warn', {
      max: 100,
      skipBlankLines: true,
      skipComments: true,
    }],
    'max-params': ['warn', 5],
    
    // Node.js specific
    'no-buffer-constructor': 'error',
    'no-path-concat': 'error',
  },
  globals: {
    // Java bridge globals (if used)
    java: 'readonly',
  },
}

