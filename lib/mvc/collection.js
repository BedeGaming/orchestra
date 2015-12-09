//
// #orchestra/mvc/collection.js
//

// extends default Backbone Collection with some helpful methods
//
// Available methods are:
//
// ```
// collection.next(model)
// collection.prev(model)
// ```
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = require('backbone');

var _backbone2 = _interopRequireDefault(_backbone);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _backbone2.default.Collection.extend({
  next: function next(model) {
    return this.at((this.indexOf(model) + 1) % _lodash2.default.size(this));
  },
  prev: function prev(model) {
    var index = this.indexOf(model) - 1;
    return this.at(index > -1 ? index : _lodash2.default.size(this) - 1);
  }
});
module.exports = exports['default'];
//# sourceMappingURL=collection.js.map
