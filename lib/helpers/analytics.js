//
// helpers.analytics
//
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _guaBrowserify = require('gua-browserify');

var _guaBrowserify2 = _interopRequireDefault(_guaBrowserify);

var AnalyticsHelper = (function () {
  function AnalyticsHelper() {
    _classCallCheck(this, AnalyticsHelper);
  }

  _createClass(AnalyticsHelper, [{
    key: 'init',
    value: function init(data) {
      this.tracker = (0, _guaBrowserify2['default'])(data);
    }
  }, {
    key: 'trackEvent',
    value: function trackEvent(action, label, value) {
      if (action === 'gameNext') {
        this.tracker('send', 'event', 'bingoEvents', action);
      } else {
        if (label === 'amount') {
          this.tracker('send', 'event', 'bingoEvents', action, label, value);
        } else {
          this.tracker('send', 'event', 'bingoEvents', action, label);
        }
      }
    }
  }]);

  return AnalyticsHelper;
})();

exports['default'] = new AnalyticsHelper();
module.exports = exports['default'];
//# sourceMappingURL=../helpers/analytics.js.map