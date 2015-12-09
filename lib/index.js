'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _backbone = require('backbone');

var _backbone2 = _interopRequireDefault(_backbone);

var _backboneRouting = require('backbone-routing');

var _backboneValidation = require('backbone-validation');

var _backboneValidation2 = _interopRequireDefault(_backboneValidation);

var _backbone3 = require('backbone.cocktail');

var _backbone4 = _interopRequireDefault(_backbone3);

var _backbone5 = require('backbone.radio');

var _backbone6 = _interopRequireDefault(_backbone5);

var _backbone7 = require('backbone.service');

var _backbone8 = _interopRequireDefault(_backbone7);

var _backbone9 = require('backbone.storage');

var _backbone10 = _interopRequireDefault(_backbone9);

var _backbone11 = require('backbone.syphon');

var _backbone12 = _interopRequireDefault(_backbone11);

var _collection = require('./mvc/collection');

var _collection2 = _interopRequireDefault(_collection);

var _currency = require('./helpers/currency');

var _currency2 = _interopRequireDefault(_currency);

var _localStorage = require('./helpers/localStorage');

var _localStorage2 = _interopRequireDefault(_localStorage);

var _translate = require('./helpers/translate');

var _translate2 = _interopRequireDefault(_translate);

var _touch = require('./mixins/touch.view');

var _touch2 = _interopRequireDefault(_touch);

var _visibility = require('./helpers/visibility');

var _visibility2 = _interopRequireDefault(_visibility);

var _module = require('./helpers/module');

var _module2 = _interopRequireDefault(_module);

var _handlebars = require('./helpers/handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

require('backbone.marionette');

require('backbone.stickit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _handlebars2.default)();

var func = _backbone2.default.Marionette.Module.create;

_backbone2.default.Marionette.Module.create = function (app, moduleNames, moduleDefinition) {
  moduleDefinition.namespace = moduleNames;
  func.apply(this, arguments);
};

// build orchestra framework
var Orchestra = {};
_lodash2.default.extend(Orchestra, _backbone2.default);
_lodash2.default.extend(Orchestra, _backbone2.default.Marionette.extend());

_lodash2.default.extend(Orchestra, {
  _: _lodash2.default,
  $: _jquery2.default,
  Radio: _backbone6.default,
  Service: _backbone8.default,
  Storage: _backbone10.default,
  Syphon: _backbone12.default,
  Validation: _backboneValidation2.default,
  Cocktail: _backbone4.default,
  Route: _backboneRouting.Route,
  Router: _backboneRouting.Router,
  Collection: _collection2.default,
  Currency: _currency2.default,
  LocalStorage: _localStorage2.default,
  Translator: _translate2.default,
  Visibility: _visibility2.default,
  ModuleHelper: _module2.default,
  TouchView: _touch2.default,

  instances: {},

  getInstance: function getInstance(namespace) {
    var _this = this;

    namespace = namespace || 'main';
    if (!this.instances[namespace]) {
      this.instances[namespace] = new this.Application({
        namespace: namespace
      });
      this.listenTo(this.instances[namespace], 'destroy', function () {
        delete _this.instances[namespace];
      });
    }

    return this.instances[namespace];
  }
});

exports.default = Orchestra;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map
