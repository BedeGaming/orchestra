//
// expose device capibilities to app object.
//
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _backbone = require('backbone.radio');

var _backbone2 = _interopRequireDefault(_backbone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var channel = _backbone2.default.channel('main');

var Visibility = (function () {
  function Visibility() {
    var _this = this;

    _classCallCheck(this, Visibility);

    var visProp = this.getHiddenProp();

    if (visProp) {
      var evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
      (0, _jquery2.default)(document).on(evtname, function () {
        if (_this.isHidden()) {
          channel.request('appHidden');
        } else {
          channel.request('appShowing');
        }
      });
    }
  }

  _createClass(Visibility, [{
    key: 'getHiddenProp',
    value: function getHiddenProp() {
      var prefixes = ['webkit', 'moz', 'ms', 'o'];

      // if 'hidden' is natively supported just return it
      if ('hidden' in document) {
        return 'hidden';
      }

      // otherwise loop over all the known prefixes until we find one
      for (var i = 0; i < prefixes.length; i++) {
        if (prefixes[i] + 'Hidden' in document) {
          return prefixes[i] + 'Hidden';
        }
      }

      // otherwise it's not supported
      return null;
    }
  }, {
    key: 'isHidden',
    value: function isHidden() {
      var prop = this.getHiddenProp();
      if (!prop) {
        return false;
      }

      return document[prop];
    }
  }]);

  return Visibility;
})();

exports.default = new Visibility();
module.exports = exports['default'];
//# sourceMappingURL=visibility.js.map
