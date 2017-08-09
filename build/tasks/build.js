var gulp = require("gulp");
var babel = require("gulp-babel");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var babelify = require('babelify');
var gutil = require('gulp-util');
var files = require('../config').files;
var pkg = require('../../package');

gulp.task("babel", function () {
  return gulp.src(files.javascript)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("lib"));
});

gulp.task('browserify', function () {
  // set up the browserify instance on a task basis
  var b = browserify(['./src/index.js'], {
    standalone: 'orchestra'
  });

  return b.transform(babelify)
    .bundle()
    .on('error', gutil.log)
    .pipe(source('orchestra.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('browserify:min', function () {
  // set up the browserify instance on a task basis
  var b = browserify(['./src/index.js'], {
    standalone: 'orchestra'
  });

  return b.transform(babelify)
    .bundle()
    .on('error', gutil.log)
    .pipe(source('orchestra.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'));
});
