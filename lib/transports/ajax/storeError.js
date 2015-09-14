//
// #orchestra/transports/storeError.js
//

// Global ajax error handling
//
//
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _backboneRadio = require('backbone.radio');

var _backboneRadio2 = _interopRequireDefault(_backboneRadio);

var channel = _backboneRadio2['default'].channel('main');

exports['default'] = function (e, jqXHR, req, err) {
  var config = channel.request('config');
  var statusCode = jqXHR.status + '';
  var errorObj = null;

  //
  // catch error if response does not provide a proper
  // response
  //
  try {
    errorObj = _jquery2['default'].parseJSON(jqXHR.responseText);
  } catch (e) {
    console.error(e.message);
    return;
  }

  var errors = {
    defaultError: function defaultError() {
      //
      // only log in debug mode
      //
      if (config.debug) {
        console.log('ERROR', e, jqXHR, req, err);
      }

      //
      // triggers global `ajaxError` event
      //
      channel.request('ajax:error', err);
    }
  };

  (errors[statusCode] ? errors[statusCode] : errors.defaultError)();
};

module.exports = exports['default'];
//# sourceMappingURL=../../transports/ajax/storeError.js.map