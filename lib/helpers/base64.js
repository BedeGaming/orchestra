//
// helpers.base64
//
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Base64 = (function () {
  function Base64() {
    _classCallCheck(this, Base64);
  }

  _createClass(Base64, [{
    key: 'isBase64',
    value: function isBase64(string) {
      var regex = /^[a-z0-9\+\/\s]+\={0,2}$/i;

      if (!string) {
        return false;
      }

      if (!regex.test(string) || string.length % 4 > 0) {
        return false;
      }

      return true;
    }
  }, {
    key: 'decode',
    value: function decode(string) {
      var digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      var result = [];
      var cur = 0;
      var prev = 0;
      var digitNum = 0;
      var i = 0;

      string = string.replace(/\s/g, '');

      if (!this.isBase64(string)) {
        return null;
      }

      string = string.replace(/\=/g, '');

      /*jshint bitwise:false */
      while (i < string.length) {
        cur = digits.indexOf(string.charAt(i));
        digitNum = i % 4;

        switch (digitNum) {
          case 1:
            //second digit
            result.push(prev << 2 | cur >> 4);
            break;
          case 2:
            //third digit
            result.push((prev & 0x0f) << 4 | cur >> 2);
            break;
          case 3:
            //fourth digit
            result.push((prev & 3) << 6 | cur);
            break;
        }

        prev = cur;
        i++;
      }
      /*jshint bitwise:true */

      return result;
    }
  }, {
    key: 'toString',
    value: function toString(string) {
      return String.fromCharCode.apply(this, this.decode(string));
    }
  }, {
    key: 'toObject',
    value: function toObject(string) {
      try {
        return JSON.parse(this.toString(string));
      } catch (e) {
        throw new Error('Invalid JSON');
      }
    }
  }]);

  return Base64;
})();

exports['default'] = new Base64();
module.exports = exports['default'];
//# sourceMappingURL=../helpers/base64.js.map