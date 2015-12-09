//
// ## helpers/handlebars
//
// Provides handlebars helpers
//
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (handlebars) {
  var _this = this;

  var Handlebars = _runtime2.default.default;

  if (global.handlebars) {
    Handlebars = global.handlebars;
  }

  if (handlebars) {
    Handlebars = handlebars;
  }

  //
  // place {{ debug }}
  //

  Handlebars.registerHelper('debug', function (optionalValue) {
    console.log('Current Context');
    console.log('====================');
    console.log(_this);

    if (optionalValue) {
      console.log('Value');
      console.log('====================');
      console.log(optionalValue);
    }
  });

  /*
   * call with {{translate "i18n_key" optional parmeters}}
   * the options params are passed to sprintf and used
   * with %s, %d etc
   *
   * full options here: https://github.com/alexei/sprintf.js
   */
  Handlebars.registerHelper('translate', function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var i18nKey = args.shift();

    // remove the options object
    args.pop();

    args.forEach(function (item, index, array) {
      if (typeof item === 'function') {
        array[index] = item();
      }
    });

    return new Handlebars.SafeString(_translate2.default.translate(i18nKey, args));
  });

  Handlebars.registerHelper('currency', function (amount, decimals) {
    amount = parseFloat(amount);

    if (decimals) {
      decimals = parseInt(decimals, 10);
    }

    var str = _currency2.default.format(amount, decimals);

    return new Handlebars.SafeString(str);
  });

  return Handlebars;
};

var _runtime = require('handlebars/runtime');

var _runtime2 = _interopRequireDefault(_runtime);

var _translate = require('./translate');

var _translate2 = _interopRequireDefault(_translate);

var _currency = require('./currency');

var _currency2 = _interopRequireDefault(_currency);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
//# sourceMappingURL=handlebars.js.map
