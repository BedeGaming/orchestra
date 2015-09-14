//
// #orchestra/transports/index.js
//

// Provides global ajax bindings
//
// Available events are:
//
// ```
// ajax:start
// ajax:stop
// ```
// Ajax options can be set at `models/config` using the provided
// `ajax`object
//
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _storeError = require('./storeError');

var _storeError2 = _interopRequireDefault(_storeError);

var _storeSuccess = require('./storeSuccess');

var _storeSuccess2 = _interopRequireDefault(_storeSuccess);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

//
// bind global ajax Error / Success handlers to helpers
//
(0, _jquery2['default'])(document).ajaxError(_storeError2['default']);
(0, _jquery2['default'])(document).ajaxSuccess(_storeSuccess2['default']);
//# sourceMappingURL=../../transports/ajax/index.js.map