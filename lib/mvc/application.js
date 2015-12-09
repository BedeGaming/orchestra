//
// #orchestra/mvc/application.js
//

// extends default Marionette Application with optional namespacing
//
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  initialize: function initialize() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    this.namespace = options.namespace;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=application.js.map
