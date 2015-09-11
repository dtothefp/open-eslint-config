# eslint-config
Configuration for JavaScript code linting.

Heavily influenced by [AirB&B styleguide](https://github.com/airbnb/javascript)

gulp-eslint
```js
//gulpfile.babel
gulp.task('lint:test', tasks.eslint);
gulp.task('lint:build', tasks.eslint);
gulp.task('lint', ['lint:test', 'lint:build']);

//lint.js
import makeEslintConfig from 'open-eslint-config';
import formatter from 'eslint-friendly-formatter';

export default function(gulp, plugins, config) {
  const {eslint} = plugins;
  const {sources, utils, environment} = config;
  const {isDev} = environment;
  const {testDir, taskDir} = sources;
  const {addbase, getTaskName} = utils;
  let src;

  return () => {
    const lintEnv = getTaskName(gulp.currentTask);

    if (lintEnv === 'test') {
      src = [addbase(testDir, '**/*.js')];
    } else if (lintEnv === 'build') {
      src = [
        addbase(taskDir, '**/*.js'),
        addbase('gulpfile.babel.js'),
        '!' + addbase(taskDir, 'tasks/selenium/wdio-config/*.js')
      ];
    }

    const pluginConfig = makeEslintConfig({isDev, lintEnv});

    return gulp.src(src)
      .pipe(eslint(pluginConfig))
      .pipe(eslint.format(formatter));
  };
}

```

eslint-loader
```js
import makeEslintConfig from 'open-eslint-config';
import formatter from 'eslint-friendly-formatter';

const {rules, configFile} = makeEslintConfig({
  isDev,
  lintEnv: 'web'
});

const preLoaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
  }
];

export default {
  entry: ....,
  output: ....,
  module: {
    preLoaders
  },
  eslint: {
    rules,
    configFile,
    formatter,
    emitError: true,
    emitWarning: true,
    failOnWarning: false,
    failOnError: false
  }
}
```
