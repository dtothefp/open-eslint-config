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
export default function(opts = {}) {
  const useReact = opts.react !== false;
  function findConfig() {
    const rootPath = require('app-root-path').path;
    const configFile = useReact ? 'eslint-react-config.json' : 'eslint-config.json';
    const moduleName = 'open-eslint-config';
    const prod = `${rootPath}/node_modules/${moduleName}/dist/${configFile}`;
    const dev = `${rootPath}/lib/${configFile}`;

    return new RegExp(moduleName).test(rootPath) ? dev : prod;
  }

  return {
    rules: assign({}, baseRules(opts), (useReact ? reactRules(opts) : {})),
    configFile: findConfig(),
    useEslintrc: false
  };
}
