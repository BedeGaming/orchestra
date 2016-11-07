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
exports.Collection = undefined;

var _backbone = require('backbone');

var _backbone2 = _interopRequireDefault(_backbone);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collection = exports.Collection = _backbone2.default.Collection.extend({
  next: function next(model) {
    return this.at((this.indexOf(model) + 1) % (0, _lodash.size)(this));
  },
  prev: function prev(model) {
    var index = this.indexOf(model) - 1;
    return this.at(index > -1 ? index : (0, _lodash.size)(this) - 1);
  }
});
//# sourceMappingURL=collection.js.map
