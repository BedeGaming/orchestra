'use strict';

var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var isparta = require('isparta');
var files = require('../config').files;
var coveralls = require('gulp-coveralls');

gulp.task('mocha', function() {
  return gulp.src(['tests/spec/**/*-spec.js'], {read: false})
    .pipe(mocha({
      globals: {
        expect: require('expect.js'),
        sinon: require('sinon')
      },
      reporter: process.env.NODE_ENV === 'build' ? 'dot' : 'nyan',
      clearRequireCache: true
    }));
});

gulp.task('istanbul', function(cb) {
  gulp.src(files.test)
    .pipe(istanbul({ instrumenter: isparta.Instrumenter }))
    .pipe(istanbul.hookRequire())
    .on('finish', function() {
      gulp.src(['tests/spec/**/*-spec.js'])
        .pipe(mocha({
          reporter: process.env.NODE_ENV === 'build' ? 'dot' : 'nyan'
        }))
        .pipe(istanbul.writeReports({
          dir: './coverage',
          reporters: [process.env.NODE_ENV === 'build' ? 'lcov' : 'html'],
          reportOpts: {dir: './coverage'}
        }))
        .on('end', cb);
    });
});

gulp.task('coveralls', ['istanbul'], function() {
  gulp.src('coverage/**/lcov.info')
    .pipe(coveralls());
});
