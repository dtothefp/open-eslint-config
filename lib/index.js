import assign from 'object-assign';
import baseRules from './base-rules';
import reactRules from './react-rules';

/**
 * @param {Object}
 * @param {Boolean} opts.isDev
 * @param {String} opts.lintEnv
 *
 * @return {Object}
 */
export default function(opts) {
  function findConfig() {
    const rootPath = require('app-root-path').path;
    const configFile = 'eslint-config.json';
    const moduleName = 'eslint-config';
    const prod = `${rootPath}/node_modules/@hfa/${moduleName}/dist/${configFile}`;
    const dev = `${rootPath}/lib/${configFile}`;

    return new RegExp(moduleName).test(rootPath) ? dev : prod;
  }

  return {
    rules: assign({}, baseRules(opts), reactRules(opts)),
    configFile: findConfig(),
    useEslintrc: false
  };
}
