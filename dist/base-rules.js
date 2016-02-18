'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var isDev = opts.isDev;
  var lintEnv = opts.lintEnv;
  var basic = opts.basic;

  var extras = {
    // babel inserts 'use strict'; for us
    'strict': [2, 'never'], // http://eslint.org/docs/rules/strict

    /**
     * ES6
     */
    'no-var': 2, // http://eslint.org/docs/rules/no-var
    'prefer-const': 2, // http://eslint.org/docs/rules/prefer-const

    /**
     * Variables
     */
    //
    // TODO: Up for discussion
    'no-shadow': 0, // http://eslint.org/docs/rules/no-shadow
    'no-shadow-restricted-names': 2, // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-use-before-define': 2, // http://eslint.org/docs/rules/no-use-before-define
    'comma-dangle': [1, 'never'], // http://eslint.org/docs/rules/comma-dangle
    'no-cond-assign': [2, 'always'], // http://eslint.org/docs/rules/no-cond-assign
    'no-constant-condition': 1, // http://eslint.org/docs/rules/no-constant-condition
    'no-ex-assign': 2, // http://eslint.org/docs/rules/no-ex-assign
    'no-extra-boolean-cast': 0, // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-irregular-whitespace': 2, // http://eslint.org/docs/rules/no-irregular-whitespace
    'no-obj-calls': 2, // http://eslint.org/docs/rules/no-obj-calls
    'no-sparse-arrays': 2, // http://eslint.org/docs/rules/no-sparse-arrays
    'block-scoped-var': 2, // http://eslint.org/docs/rules/block-scoped-var

    /**
     * Best practices
     */
    'consistent-return': 0, // http://eslint.org/docs/rules/consistent-return
    'curly': [2, 'multi-line'], // http://eslint.org/docs/rules/curly
    'default-case': 0, // http://eslint.org/docs/rules/default-case
    'dot-notation': [2, { // http://eslint.org/docs/rules/dot-notation
      'allowKeywords': true
    }],
    'eqeqeq': 2, // http://eslint.org/docs/rules/eqeqeq
    'guard-for-in': 2, // http://eslint.org/docs/rules/guard-for-in
    'no-caller': 2, // http://eslint.org/docs/rules/no-caller
    'no-else-return': 2, // http://eslint.org/docs/rules/no-else-return
    'no-eq-null': 2, // http://eslint.org/docs/rules/no-eq-null
    'no-eval': 2, // http://eslint.org/docs/rules/no-eval
    'no-extend-native': 2, // http://eslint.org/docs/rules/no-extend-native
    'no-extra-bind': 2, // http://eslint.org/docs/rules/no-extra-bind
    'no-fallthrough': 2, // http://eslint.org/docs/rules/no-fallthrough
    'no-floating-decimal': 2, // http://eslint.org/docs/rules/no-floating-decimal
    'no-implied-eval': 2, // http://eslint.org/docs/rules/no-implied-eval
    'no-lone-blocks': 2, // http://eslint.org/docs/rules/no-lone-blocks
    'no-loop-func': 2, // http://eslint.org/docs/rules/no-loop-func
    'no-multi-str': 2, // http://eslint.org/docs/rules/no-multi-str
    'no-native-reassign': 2, // http://eslint.org/docs/rules/no-native-reassign
    'no-new': 0, // http://eslint.org/docs/rules/no-new
    'no-new-func': 2, // http://eslint.org/docs/rules/no-new-func
    'no-new-wrappers': 2, // http://eslint.org/docs/rules/no-new-wrappers
    'no-octal': 2, // http://eslint.org/docs/rules/no-octal
    'no-octal-escape': 2, // http://eslint.org/docs/rules/no-octal-escape
    'no-param-reassign': 0, // http://eslint.org/docs/rules/no-param-reassign
    'no-proto': 2, // http://eslint.org/docs/rules/no-proto
    'no-redeclare': 2, // http://eslint.org/docs/rules/no-redeclare
    'no-return-assign': 0, // http://eslint.org/docs/rules/no-return-assign
    'no-script-url': 2, // http://eslint.org/docs/rules/no-script-url
    'no-self-compare': 2, // http://eslint.org/docs/rules/no-self-compare
    'no-sequences': 2, // http://eslint.org/docs/rules/no-sequences
    'no-throw-literal': 2, // http://eslint.org/docs/rules/no-throw-literal
    'no-with': 2, // http://eslint.org/docs/rules/no-with
    'radix': 2, // http://eslint.org/docs/rules/radix
    'vars-on-top': 2, // http://eslint.org/docs/rules/vars-on-top
    'wrap-iife': [2, 'any'], // http://eslint.org/docs/rules/wrap-iife
    'yoda': 2, // http://eslint.org/docs/rules/yoda
    'quotes': [2, 'single', 'avoid-escape' // http://eslint.org/docs/rules/quotes
    ],
    'comma-spacing': [2, { // http://eslint.org/docs/rules/comma-spacing
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'], // http://eslint.org/docs/rules/comma-style
    'eol-last': 2, // http://eslint.org/docs/rules/eol-last
    'key-spacing': [2, { // http://eslint.org/docs/rules/key-spacing
      'beforeColon': false,
      'afterColon': true
    }],
    'new-cap': [2, { // http://eslint.org/docs/rules/new-cap
      'newIsCap': true,
      'capIsNew': false,
      capIsNewExceptions: ['RIT', 'Store', 'Actions']
    }],
    'no-multiple-empty-lines': [2, { // http://eslint.org/docs/rules/no-multiple-empty-lines
      'max': 2
    }],
    'no-spaced-func': 2, // http://eslint.org/docs/rules/no-spaced-func
    'one-var': [2, {
      uninitialized: 'always',
      initialized: 'never'
    }], // http://eslint.org/docs/rules/one-var
    'padded-blocks': [0, 'never'], // http://eslint.org/docs/rules/padded-blocks
    'space-before-blocks': 2, // http://eslint.org/docs/rules/space-before-blocks
    'space-before-function-paren': [2, 'never'], // http://eslint.org/docs/rules/space-before-function-paren
    'space-infix-ops': 2, // http://eslint.org/docs/rules/space-infix-ops
    'keyword-spacing': 2 // http://eslint.org/docs/rules/space-return-throw-case
    //'spaced-comment': [2, 'always',  {// http://eslint.org/docs/rules/spaced-comment
    //'exceptions': ['-', '+'],
    //'markers': ['=', '!']           // space here to support sprockets directives
    //}] TODO: Figure out how to insert spaces in comments with vim
  };

  var base = {
    /**
     * Strict mode
     */

    /**
     * Variables
     */
    //
    // TODO: Up for discussion
    'no-undef': 2, // http://eslint.org/docs/rules/no-undef
    'no-unused-expressions': [1, { // http://eslint.org/docs/rules/no-unused-expressions.html
      allowShortCircuit: true,
      allowTernary: true
    }],
    'no-unused-vars': [1, { // http://eslint.org/docs/rules/no-unused-vars
      'vars': 'local',
      'args': 'none'
    }],

    /**
     * Possible errors
     */
    'no-dupe-keys': 2, // http://eslint.org/docs/rules/no-dupe-keys
    'no-duplicate-case': 2, // http://eslint.org/docs/rules/no-duplicate-case
    'no-empty': 2, // http://eslint.org/docs/rules/no-empty
    'no-extra-semi': 2, // http://eslint.org/docs/rules/no-extra-semi
    'no-func-assign': 2, // http://eslint.org/docs/rules/no-func-assign
    'no-inner-declarations': 2, // http://eslint.org/docs/rules/no-inner-declarations
    'no-invalid-regexp': 2, // http://eslint.org/docs/rules/no-invalid-regexp
    'no-unreachable': 2, // http://eslint.org/docs/rules/no-unreachable
    'use-isnan': 2, // http://eslint.org/docs/rules/use-isnan

    // No debugger will be turned on on an environmental basis
    'no-debugger': 0, // http://eslint.org/docs/rules/no-debugger

    /**
     * Best practices
     */
    'semi': [1, 'always'], // http://eslint.org/docs/rules/semi
    'semi-spacing': [2, { // http://eslint.org/docs/rules/semi-spacing
      'before': false,
      'after': true
    }],

    /**
     * Style
     */
    'indent': [1, 2, // http://eslint.org/docs/rules/indent
    {
      'SwitchCase': 1
    }],
    'brace-style': [// http://eslint.org/docs/rules/brace-style
    2, '1tbs', {
      'allowSingleLine': true
    }],
    'jsx-quotes': 2, // http://eslint.org/docs/rules/jsx-quotes.html
    'camelcase': [2, { // http://eslint.org/docs/rules/camelcase
      'properties': 'never'
    }],
    'no-nested-ternary': 2, // http://eslint.org/docs/rules/no-nested-ternary
    'no-new-object': 0, // http://eslint.org/docs/rules/no-new-object
    'no-trailing-spaces': 2, // http://eslint.org/docs/rules/no-trailing-spaces
    'no-extra-parens': [2, 'functions'], // http://eslint.org/docs/rules/no-extra-parens
    'no-underscore-dangle': 0 // http://eslint.org/docs/rules/no-underscore-dangle
  }; //end rules

  if (!basic) {
    (0, _objectAssign2.default)(base, extras);
  }

  var envs = {
    web: {},
    test: {
      'no-unused-expressions': 0,
      'block-scoped-var': 0,
      'no-unused-vars': 0,
      'no-use-before-define': 0,
      'no-extra-bind': 0,
      'prefer-const': 0
    },
    build: {
      'prefer-const': 0,
      'no-process-exit': 0
    }
  };

  var prod = {
    web: {
      'no-console': 1,
      'no-debugger': 1,
      'no-alert': 1,
      'no-unused-expressions': [2, {
        allowShortCircuit: true,
        allowTernary: true
      }],
      'no-unused-vars': [2, {
        'vars': 'local',
        'args': 'none'
      }],
      'comma-dangle': 2,
      'semi': [2, 'always'],
      'indent': [2, 2, {
        'SwitchCase': 1
      }]
    },
    test: {
      'no-console': 1,
      'no-debugger': 1,
      'no-alert': 1
    },
    build: {
      'no-debugger': 1,
      'no-alert': 1,
      'no-unused-expressions': [2, {
        allowShortCircuit: true,
        allowTernary: true
      }],
      'no-unused-vars': [2, {
        'vars': 'local',
        'args': 'none'
      }],
      'comma-dangle': 2,
      'semi': [2, 'always'],
      'indent': [2, 2, {
        'SwitchCase': 1
      }]
    }
  };

  var config = (0, _objectAssign2.default)({}, base, envs[lintEnv]);

  return isDev ? config : (0, _objectAssign2.default)({}, config, prod[lintEnv]);
};

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/**
 * @param {Object} opts
 * @param {Boolean} opts.isDev
 * @param {String} opts.lintEnv type of linting environment `web | test | build`
 * @return {Object}
 */