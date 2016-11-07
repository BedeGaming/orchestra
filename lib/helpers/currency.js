'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Currency = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _backbone = require('backbone.radio');

var _backbone2 = _interopRequireDefault(_backbone);

var _numbro = require('numbro');

var _numbro2 = _interopRequireDefault(_numbro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var channel = _backbone2.default.channel('global');

var CurrencyHelper = function () {
  function CurrencyHelper() {
    _classCallCheck(this, CurrencyHelper);
  }

  _createClass(CurrencyHelper, [{
    key: 'addLocale',
    value: function addLocale(code, language) {
      _numbro2.default.culture(code, language);
    }
  }, {
    key: 'format',
    value: function format(amount) {
      var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var currencyLocale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var lang = currencyLocale || channel.request('currencyLocale');

      var formatStr = '$0,0';

      if (lang) {
        _numbro2.default.culture(lang);
        var language = _numbro2.default.cultureData();
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

      return (0, _numbro2.default)(amount).format(formatStr);
    }
  }]);

  return CurrencyHelper;
}();

var Currency = exports.Currency = new CurrencyHelper();
//# sourceMappingURL=currency.js.map
