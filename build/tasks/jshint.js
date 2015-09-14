'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var files = require('../config').files;

gulp.task('jshint', function() {
  return gulp.src(files.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});
