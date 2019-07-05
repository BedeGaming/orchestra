//
// helpers.translate
//
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Translator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _i18next = require('i18next');

var _i18next2 = _interopRequireDefault(_i18next);

var _backbone = require('backbone.radio');

var _backbone2 = _interopRequireDefault(_backbone);

var _i18nextSprintfPostprocessor = require('i18next-sprintf-postprocessor');

var _i18nextSprintfPostprocessor2 = _interopRequireDefault(_i18nextSprintfPostprocessor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var resources = {};
var channel = _backbone2.default.channel('global');

var TranslateHelpers = function () {
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
      var options = {
        postProcess: 'sprintf',
        sprintf: params
      };

      _i18next2.default.use(_i18nextSprintfPostprocessor2.default).init({
        compatibilityJSON: 'v2',
        nsSeparator: false,
        keySeparator: false,
        lng: locale,
        resources: resources[locale]
      }, function (err, translate) {
        if (params && params.count) {
          options.count = params.count;
        }
        result = translate(i18nKey, options);
      });

      return result;
    }
  }]);

  return TranslateHelpers;
}();

var Translator = exports.Translator = new TranslateHelpers();
//# sourceMappingURL=translate.js.map
