try{require("source-map-support").install();}
catch(err) {}
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _objectAssign = __webpack_require__(2);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _baseRules = __webpack_require__(3);
	
	var _baseRules2 = _interopRequireDefault(_baseRules);
	
	var _reactRules = __webpack_require__(4);
	
	var _reactRules2 = _interopRequireDefault(_reactRules);
	
	/**
	 * @param {Object}
	 * @param {Boolean} opts.isDev
	 * @param {String} opts.lintEnv
	 *
	 * @return {Object}
	 */
	
	exports['default'] = function (opts) {
	  function findConfig() {
	    var rootPath = __webpack_require__(5).path;
	    var configFile = 'eslint-config.json';
	    var moduleName = 'eslint-config';
	    var prod = rootPath + '/node_modules/' + moduleName + '/dist/' + configFile;
	    var dev = rootPath + '/lib/' + configFile;
	
	    return new RegExp(moduleName).test(rootPath) ? dev : prod;
	  }
	
	  return {
	    rules: (0, _objectAssign2['default'])({}, (0, _baseRules2['default'])(opts), (0, _reactRules2['default'])(opts)),
	    configFile: findConfig(),
	    useEslintrc: false
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("object-assign");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _objectAssign = __webpack_require__(2);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	/**
	 * @param {Object} opts
	 * @param {Boolean} opts.isDev
	 * @param {String} opts.lintEnv type of linting environment `web | test | build`
	 * @return {Object}
	 */
	
	exports['default'] = function (opts) {
	  var isDev = opts.isDev;
	  var lintEnv = opts.lintEnv;
	
	  var base = {
	    /**
	     * Strict mode
	     */
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
	    'no-undef': 2, // http://eslint.org/docs/rules/no-undef
	    'no-unused-vars': [2, { // http://eslint.org/docs/rules/no-unused-vars
	      'vars': 'local',
	      'args': 'none'
	    }],
	    'no-use-before-define': 2, // http://eslint.org/docs/rules/no-use-before-define
	
	    /**
	     * Possible errors
	     */
	    'comma-dangle': [2, 'never'], // http://eslint.org/docs/rules/comma-dangle
	    'no-cond-assign': [2, 'always'], // http://eslint.org/docs/rules/no-cond-assign
	    'no-constant-condition': 1, // http://eslint.org/docs/rules/no-constant-condition
	    'no-dupe-keys': 2, // http://eslint.org/docs/rules/no-dupe-keys
	    'no-duplicate-case': 2, // http://eslint.org/docs/rules/no-duplicate-case
	    'no-empty': 2, // http://eslint.org/docs/rules/no-empty
	    'no-ex-assign': 2, // http://eslint.org/docs/rules/no-ex-assign
	    'no-extra-boolean-cast': 0, // http://eslint.org/docs/rules/no-extra-boolean-cast
	    'no-extra-semi': 2, // http://eslint.org/docs/rules/no-extra-semi
	    'no-func-assign': 2, // http://eslint.org/docs/rules/no-func-assign
	    'no-inner-declarations': 2, // http://eslint.org/docs/rules/no-inner-declarations
	    'no-invalid-regexp': 2, // http://eslint.org/docs/rules/no-invalid-regexp
	    'no-irregular-whitespace': 2, // http://eslint.org/docs/rules/no-irregular-whitespace
	    'no-obj-calls': 2, // http://eslint.org/docs/rules/no-obj-calls
	    'no-sparse-arrays': 2, // http://eslint.org/docs/rules/no-sparse-arrays
	    'no-unreachable': 2, // http://eslint.org/docs/rules/no-unreachable
	    'use-isnan': 2, // http://eslint.org/docs/rules/use-isnan
	    'block-scoped-var': 2, // http://eslint.org/docs/rules/block-scoped-var
	
	    // No debugger will be turned on on an environmental basis
	    'no-debugger': 0, // http://eslint.org/docs/rules/no-debugger
	
	    /**
	     * Best practices
	     */
	    'consistent-return': 2, // http://eslint.org/docs/rules/consistent-return
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
	    'no-return-assign': 2, // http://eslint.org/docs/rules/no-return-assign
	    'no-script-url': 2, // http://eslint.org/docs/rules/no-script-url
	    'no-self-compare': 2, // http://eslint.org/docs/rules/no-self-compare
	    'no-sequences': 2, // http://eslint.org/docs/rules/no-sequences
	    'no-throw-literal': 2, // http://eslint.org/docs/rules/no-throw-literal
	    'no-with': 2, // http://eslint.org/docs/rules/no-with
	    'radix': 2, // http://eslint.org/docs/rules/radix
	    'vars-on-top': 2, // http://eslint.org/docs/rules/vars-on-top
	    'wrap-iife': [2, 'any'], // http://eslint.org/docs/rules/wrap-iife
	    'yoda': 2, // http://eslint.org/docs/rules/yoda
	
	    /**
	     * Style
	     */
	    'indent': [2, 2], // http://eslint.org/docs/rules/indent
	    'brace-style': [2, // http://eslint.org/docs/rules/brace-style
	    '1tbs', {
	      'allowSingleLine': true
	    }],
	    'quotes': [2, 'single', 'avoid-escape' // http://eslint.org/docs/rules/quotes
	    ],
	    'camelcase': [2, { // http://eslint.org/docs/rules/camelcase
	      'properties': 'never'
	    }],
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
	    'no-nested-ternary': 2, // http://eslint.org/docs/rules/no-nested-ternary
	    'no-new-object': 0, // http://eslint.org/docs/rules/no-new-object
	    'no-spaced-func': 2, // http://eslint.org/docs/rules/no-spaced-func
	    'no-trailing-spaces': 2, // http://eslint.org/docs/rules/no-trailing-spaces
	    'no-extra-parens': [2, 'functions'], // http://eslint.org/docs/rules/no-extra-parens
	    'no-underscore-dangle': 0, // http://eslint.org/docs/rules/no-underscore-dangle
	    'one-var': [2, {
	      uninitialized: 'always',
	      initialized: 'never'
	    }], // http://eslint.org/docs/rules/one-var
	    'padded-blocks': [0, 'never'], // http://eslint.org/docs/rules/padded-blocks
	    'semi': [2, 'always'], // http://eslint.org/docs/rules/semi
	    'semi-spacing': [2, { // http://eslint.org/docs/rules/semi-spacing
	      'before': false,
	      'after': true
	    }],
	    'space-after-keywords': 2, // http://eslint.org/docs/rules/space-after-keywords
	    'space-before-blocks': 2, // http://eslint.org/docs/rules/space-before-blocks
	    'space-before-function-paren': [2, 'never'], // http://eslint.org/docs/rules/space-before-function-paren
	    'space-infix-ops': 2, // http://eslint.org/docs/rules/space-infix-ops
	    'space-return-throw-case': 2 // http://eslint.org/docs/rules/space-return-throw-case
	    //'spaced-comment': [2, 'always',  {// http://eslint.org/docs/rules/spaced-comment
	    //'exceptions': ['-', '+'],
	    //'markers': ['=', '!']           // space here to support sprockets directives
	    //}] TODO: Figure out how to insert spaces in comments with vim
	  }; //end rules
	
	  var envs = {
	    web: {},
	    test: {
	      'no-unused-expressions': 0,
	      'block-scoped-var': 0,
	      'no-unused-vars': 0,
	      'no-use-before-define': 0,
	      'no-extra-bind': 0
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
	      'no-alert': 1
	    },
	    test: {
	      'no-console': 1,
	      'no-debugger': 1,
	      'no-alert': 1
	    },
	    build: {
	      'no-debugger': 1,
	      'no-alert': 1
	    }
	  };
	
	  var config = (0, _objectAssign2['default'])({}, base, envs[lintEnv]);
	
	  return isDev ? config : (0, _objectAssign2['default'])({}, config, prod[lintEnv]);
	};
	
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _objectAssign = __webpack_require__(2);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	/**
	 * @param {Object} opts
	 * @param {Boolean} opts.isDev
	 * @return {Object}
	 */
	
	exports['default'] = function (opts) {
	  var isDev = opts.isDev;
	
	  var base = {
	    /**
	     * JSX style
	     */
	    'react/display-name': 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
	    'react/jsx-boolean-value': 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
	    'react/jsx-quotes': [2, 'double'], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-quotes.md
	    'react/jsx-no-undef': 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
	    'react/jsx-sort-props': 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
	    'react/jsx-sort-prop-types': 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md
	    'react/jsx-uses-react': 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
	    'react/jsx-uses-vars': 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
	    'react/no-did-mount-set-state': [2, 'allow-in-func'], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
	    'react/no-did-update-set-state': 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
	    'react/no-multi-comp': 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
	    'react/no-unknown-property': 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
	    'react/prop-types': 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
	    'react/react-in-jsx-scope': 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
	    'react/self-closing-comp': 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
	    'react/wrap-multilines': 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
	    'react/sort-comp': [2, { // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
	      'order': ['lifecycle', '/^on.+$/', '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/', 'everything-else', '/^render.+$/', 'render']
	    }]
	  }; //end rules
	
	  var prod = {};
	
	  return isDev ? base : (0, _objectAssign2['default'])({}, base, prod);
	};
	
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("app-root-path");

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map