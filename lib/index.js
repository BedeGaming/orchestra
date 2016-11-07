/* jshint -W079 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Behavior = exports.Region = exports.CompositeView = exports.CollectionView = exports.View = exports.Application = exports.History = exports.history = exports.Sync = exports.Model = exports.Validation = exports.Syphon = exports.Radio = exports.Storage = exports.Service = exports._ = exports.$ = exports.Router = exports.Route = undefined;

var _backboneRouting = require('backbone-routing');

Object.defineProperty(exports, 'Route', {
  enumerable: true,
  get: function get() {
    return _backboneRouting.Route;
  }
});
Object.defineProperty(exports, 'Router', {
  enumerable: true,
  get: function get() {
    return _backboneRouting.Router;
  }
});

var _collection = require('./mvc/collection');

Object.keys(_collection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _collection[key];
    }
  });
});

var _currency = require('./helpers/currency');

Object.keys(_currency).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _currency[key];
    }
  });
});

var _localStorage = require('./helpers/localStorage');

Object.keys(_localStorage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _localStorage[key];
    }
  });
});

var _translate = require('./helpers/translate');

Object.keys(_translate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _translate[key];
    }
  });
});

var _visibility = require('./helpers/visibility');

Object.keys(_visibility).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _visibility[key];
    }
  });
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _backbone = require('backbone');

var _backbone2 = _interopRequireDefault(_backbone);

var _backboneValidation = require('backbone-validation');

var _backboneValidation2 = _interopRequireDefault(_backboneValidation);

var _backbone3 = require('backbone.radio');

var _backbone4 = _interopRequireDefault(_backbone3);

var _backbone5 = require('backbone.service');

var _backbone6 = _interopRequireDefault(_backbone5);

var _backbone7 = require('backbone.storage');

var _backbone8 = _interopRequireDefault(_backbone7);

var _backbone9 = require('backbone.syphon');

var _backbone10 = _interopRequireDefault(_backbone9);

var _handlebars = require('./helpers/handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

var _backbone11 = require('backbone.marionette');

var _backbone12 = _interopRequireDefault(_backbone11);

require('backbone.stickit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.__agent) {
  window.__agent.start(_backbone2.default, _backbone12.default);
}

(0, _handlebars2.default)();

var $ = exports.$ = _jquery2.default;
var _ = exports._ = _lodash2.default;
var Service = exports.Service = _backbone6.default;
var Storage = exports.Storage = _backbone8.default;
var Radio = exports.Radio = _backbone4.default;
var Syphon = exports.Syphon = _backbone10.default;
var Validation = exports.Validation = _backboneValidation2.default;
var Model = exports.Model = _backbone2.default.Model;
var Sync = exports.Sync = _backbone2.default.Sync;
var history = exports.history = _backbone2.default.history;
var History = exports.History = _backbone2.default.History;
var Application = exports.Application = _backbone12.default.Application;
var View = exports.View = _backbone12.default.View;
var CollectionView = exports.CollectionView = _backbone12.default.CollectionView;
var CompositeView = exports.CompositeView = _backbone12.default.CompositeView;
var Region = exports.Region = _backbone12.default.Region;
var Behavior = exports.Behavior = _backbone12.default.Behavior;
//# sourceMappingURL=index.js.map
