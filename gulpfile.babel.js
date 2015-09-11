import gulp from 'gulp';
import eslint from 'gulp-eslint';
import webpack from 'webpack';
import config from './webpack.config';
import eslintConfig from './lib';
import formatter from 'eslint-friendly-formatter';

const isWatch = process.argv.indexOf('watch') !== -1;
const compiler = webpack(config);
const src = [
  './lib/**/*.js',
  'gulpfile.babel.js'
];

const logger = function logger(err, stats) {
  if (err) {
    throw new Error(err);
  }

  console.log(stats.toString());
};

gulp.task('lint', () => {
  const lintConfig = eslintConfig({
    isDev: true,
    lintEnv: 'build'
  });

  return gulp.src(src)
    .pipe(eslint(lintConfig))
    .pipe(eslint.format(formatter));
});

gulp.task('copy', () => {
  return gulp.src('./lib/*.json')
    .pipe(gulp.dest('./dist'));
});

gulp.task('bundle', () => {
  if (isWatch) {
    compiler.watch({
      aggregateTimeout: 300,
      poll: true
    }, logger);
  } else {
    compiler.run(logger);
  }
});

gulp.task('release', ['copy', 'bundle']);
