//
// helpers.translate
//
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18nextClient = require('i18next-client');

var _i18nextClient2 = _interopRequireDefault(_i18nextClient);

var _backbone = require('backbone.radio');

var _backbone2 = _interopRequireDefault(_backbone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var resources = {};
var channel = _backbone2.default.channel('global');

var TranslateHelpers = (function () {
  function TranslateHelpers() {
    _classCallCheck(this, TranslateHelpers);
  }

  _createClass(TranslateHelpers, [{
    key: 'getLocale',
    value: function getLocale() {
      var locale = 'en-GB';

      if (channel.request('config')) {
        var config = channel.request('config');

        if (config.app) {
          locale = config.app.locale || 'en-GB';
        }
      }

      return locale;
    }
  }, {
    key: 'addLocale',
    value: function addLocale(key, resStore) {
      resources[key] = resStore;
    }
  }, {
    key: 'translate',
    value: function translate(i18nKey, params) {
      var locale = this.getLocale();
      var result = null;

      _i18nextClient2.default.init({
        lng: locale,
        resStore: resources[locale]
      }, function (err, translate) {
        result = translate(i18nKey, {
          postProcess: 'sprintf',
          sprintf: params
        });
      });

      return result;
    }
  }]);

  return TranslateHelpers;
})();

exports.default = new TranslateHelpers();
module.exports = exports['default'];
//# sourceMappingURL=translate.js.map
