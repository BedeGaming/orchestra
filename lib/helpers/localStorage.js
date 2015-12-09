//
// #orchestra/storage/local.js
//

// Provides a localStorage adapter to the application.
//
// Available methods are:
//
// ```
// adapter.setItem()
// adapter.getItem()
// adapter.removeItem()
// adapter.clear()
// ```
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalStorage = (function () {
  function LocalStorage() {
    _classCallCheck(this, LocalStorage);
  }

  _createClass(LocalStorage, [{
    key: 'setItem',
    value: function setItem(name, item) {
      if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
        window.localStorage.setItem(name, window.JSON.stringify(item));
      } else {
        window.localStorage.setItem(name, item);
      }
    }
  }, {
    key: 'getItem',
    value: function getItem(name) {
      var item = window.localStorage.getItem(name);

      if (typeof item !== 'undefined' && item !== null) {
        try {
          item = window.JSON.parse(item);
        } catch (e) {}
      }

      return item;
    }
  }, {
    key: 'removeItem',
    value: function removeItem(name) {
      window.localStorage.removeItem(name);
    }
  }, {
    key: 'clear',
    value: function clear() {
      window.localStorage.clear();
    }
  }]);

  return LocalStorage;
})();

exports.default = new LocalStorage();
module.exports = exports['default'];
//# sourceMappingURL=localStorage.js.map
