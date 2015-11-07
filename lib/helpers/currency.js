'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _backboneRadio = require('backbone.radio');

var _backboneRadio2 = _interopRequireDefault(_backboneRadio);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var channel = _backboneRadio2['default'].channel('global');

var CurrencyHelper = (function () {
  function CurrencyHelper() {
    _classCallCheck(this, CurrencyHelper);
  }

  _createClass(CurrencyHelper, [{
    key: 'addLocale',
    value: function addLocale(code, language) {
      _numeral2['default'].language(code, language);
    }
  }, {
    key: 'format',
    value: function format(amount) {
      var decimals = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
      var currencyLocale = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

      var lang = currencyLocale || channel.request('currencyLocale');

      var format = '$0,0';

      if (lang) {
        _numeral2['default'].language(lang);
        var language = _numeral2['default'].languageData();
        if (language.format) {
          format = language.format;
        }
      }

      for (var i = 0; i < decimals; i++) {
        if (i === 0) {
          format += '.';
        }

        format += '0';
      }

      return (0, _numeral2['default'])(amount).format(format);
    }
  }]);

  return CurrencyHelper;
})();

exports['default'] = new CurrencyHelper();
module.exports = exports['default'];
//# sourceMappingURL=currency.js.map
