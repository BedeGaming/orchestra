var files = {
  javascript: [
    'src/**/*.js'
  ],
  test: [
    'src/**/*.js',
    '!src/helpers/lodash.js'
  ],
  lint: [
    'src/**/*.js',
    '!src/helpers/lodash.js'
  ]
};

module.exports = {
  files: files
};
