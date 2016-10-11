var gulp = require('gulp');
var file = require('gulp-file');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var rollup = require('rollup').rollup;
var babel = require('rollup-plugin-babel');
var json = require('rollup-plugin-json');
var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var preset = require('babel-preset-es2015-rollup');

var pkg = require('../../package');

var srcPath = 'src/';
var buildPath = 'dist/';

function _generate(bundle){
  return bundle.generate({
    format: 'umd',
    moduleName: 'Orchestra = global[\'Orchestra\']',
    sourceMap: true
  });
}

function bundle(opts) {
  return rollup({
    entry: srcPath + 'index.js',
    plugins: [
      json(),
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs({
        namedExports: {
          'backbone-routing': [ 'Route', 'Router' ]
        }
      }),
      babel({
        sourceMaps: true,
        presets: [ preset ],
        babelrc: false
      })
    ]
  }).then(bundle => {
    return _generate(bundle);
  }).then(gen => {
    gen.code += '\n//# sourceMappingURL=' + gen.map.toUrl();
    return gen;
  });
}

gulp.task('build-lib', function(){
  return bundle().then(gen => {
    return file('orchestra.js', gen.code, {src: true})
      .pipe(plumber())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(buildPath))
      .pipe(filter(['*', '!**/*.js.map']))
      .pipe(rename('orchestra.min.js'))
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify({
        preserveComments: 'license'
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(buildPath));
  });
});

gulp.task('minify', function(){
  return gulp.src('dist/orchestra.js')
      .pipe(rename('orchestra.min.js'))
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify({
        preserveComments: 'license'
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(buildPath));
});

gulp.task('build', function(done) {
  runSequence('build-lib', 'minify', done);
});
