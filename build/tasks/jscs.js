'use strict';

var gulp = require('gulp');
var jscs = require('gulp-jscs');
var files = require('../config').files;

gulp.task('jscs', function() {
  return gulp.src(files.lint)
    .pipe(jscs());
});
