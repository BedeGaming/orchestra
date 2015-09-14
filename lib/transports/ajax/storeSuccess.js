//
// #orchestra/transports/storeSuccess.js
//

// Global ajax success handling
//
//
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _backboneRadio = require('backbone.radio');

var _backboneRadio2 = _interopRequireDefault(_backboneRadio);

var channel = _backboneRadio2['default'].channel('main');

exports['default'] = function (e, jqXHR, opts, res) {

  var config = channel.request('config');
  var statusCode = jqXHR.status + '';

  var success = {
    defaultSucces: function defaultSucces() {
      //
      // only log in debug mode
      //
      //
      if (config.debug) {
        console.log(e, jqXHR, opts, res);
      }

      //
      // triggers global `ajaxSuccess` event
      //
      channel.request('ajaxSuccess', res);
    }

  };

  (success[statusCode] ? success[statusCode] : success.defaultSuccess)();
};

module.exports = exports['default'];
//# sourceMappingURL=../../transports/ajax/storeSuccess.js.map