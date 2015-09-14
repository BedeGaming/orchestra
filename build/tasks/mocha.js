'use strict';

var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var isparta = require('isparta');
var files = require('../config').files;

gulp.task('mocha', function() {
  return gulp.src(['tests/spec/**/*-spec.js'], {read: false})
    .pipe(mocha({
      globals: {
        expect: require('expect.js'),
        sinon: require('sinon')
      },
      reporter: process.env.NODE_ENV === 'build' ? 'mocha-teamcity-reporter' : 'nyan',
      clearRequireCache: true
    }));
});

gulp.task('istanbul', function(cb) {
  gulp.src(files.javascript)
    .pipe(istanbul({ instrumenter: isparta.Instrumenter }))
    .pipe(istanbul.hookRequire())
    .on('finish', function() {
      gulp.src(['tests/spec/**/*-spec.js'])
        .pipe(mocha({
          reporter: process.env.NODE_ENV === 'build' ? 'mocha-teamcity-reporter' : 'nyan'
        }))
        .pipe(istanbul.writeReports({
          dir: './coverage',
          reporters: ['html', 'teamcity'],
          reportOpts: {dir: './coverage'}
        }))
        .on('end', cb);
    });
});
