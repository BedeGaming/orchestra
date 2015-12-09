'use strict';

var gulp = require('gulp');
var files = require('./build/config').files;
var requireDir = require('require-dir');

require('babel-register');
requireDir('./build/tasks');

gulp.task('lint', ['jshint', 'jscs']);
gulp.task('test', ['lint', 'mocha']);
gulp.task('coverage', ['lint', 'istanbul']);
gulp.task('build', ['test', 'browserify', 'browserify:min', 'babel']);

gulp.task('watch', function() {
  gulp.watch(files.javascript, ['lint', 'test']);
});

gulp.task('default', ['test']);
