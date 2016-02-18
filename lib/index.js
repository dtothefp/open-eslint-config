import path from 'path';
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
  const {react} = opts;
  const rules = baseRules(opts);

  if (react) {
    assign(rules, reactRules(opts));
  }

  return {
    rules,
    configFile: path.join(__dirname, 'eslint-config.json'),
    useEslintrc: false
  };
}
