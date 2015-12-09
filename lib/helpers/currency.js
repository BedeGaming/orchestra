'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = require('backbone.radio');

var _backbone2 = _interopRequireDefault(_backbone);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var channel = _backbone2.default.channel('global');

var CurrencyHelper = (function () {
  function CurrencyHelper() {
    _classCallCheck(this, CurrencyHelper);
  }

  _createClass(CurrencyHelper, [{
    key: 'addLocale',
    value: function addLocale(code, language) {
      _numeral2.default.language(code, language);
    }
  }, {
    key: 'format',
    value: function format(amount) {
      var decimals = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
      var currencyLocale = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

      var lang = currencyLocale || channel.request('currencyLocale');

      var formatStr = '$0,0';

      if (lang) {
        _numeral2.default.language(lang);
        var language = _numeral2.default.languageData();
        if (language.format) {
          formatStr = language.format;
        }
      }

      for (var i = 0; i < decimals; i++) {
        if (i === 0) {
          formatStr += '.';
        }

        formatStr += '0';
      }

      return (0, _numeral2.default)(amount).format(formatStr);
    }
  }]);

  return CurrencyHelper;
})();

exports.default = new CurrencyHelper();
module.exports = exports['default'];
//# sourceMappingURL=currency.js.map
