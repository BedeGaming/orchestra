//
// helpers.regex
//
'use strict';

RegExp.escape = function (text) {
  var regex = /[\-\[\]\{\}\(\)\*\+\?\.\,\\\^\$|#\s]/g;
  return text.replace(regex, '\\$&');
};

module.exports = RegExp;
//# sourceMappingURL=../helpers/regex.js.map