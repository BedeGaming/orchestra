'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _backbone = require('backbone');

var _backbone2 = _interopRequireDefault(_backbone);

var _backboneRouting = require('backbone-routing');

var _backboneCocktail = require('backbone.cocktail');

var _backboneCocktail2 = _interopRequireDefault(_backboneCocktail);

var _backboneRadio = require('backbone.radio');

var _backboneRadio2 = _interopRequireDefault(_backboneRadio);

var _backboneService = require('backbone.service');

var _backboneService2 = _interopRequireDefault(_backboneService);

var _backboneStorage = require('backbone.storage');

var _backboneStorage2 = _interopRequireDefault(_backboneStorage);

var _backboneSyphon = require('backbone.syphon');

var _backboneSyphon2 = _interopRequireDefault(_backboneSyphon);

var _mvcCollection = require('./mvc/collection');

var _mvcCollection2 = _interopRequireDefault(_mvcCollection);

var _helpersCurrency = require('./helpers/currency');

var _helpersCurrency2 = _interopRequireDefault(_helpersCurrency);

var _helpersLocalStorage = require('./helpers/localStorage');

var _helpersLocalStorage2 = _interopRequireDefault(_helpersLocalStorage);

var _helpersTranslate = require('./helpers/translate');

var _helpersTranslate2 = _interopRequireDefault(_helpersTranslate);

var _mixinsTouchView = require('./mixins/touch.view');

var _mixinsTouchView2 = _interopRequireDefault(_mixinsTouchView);

var _helpersVisibility = require('./helpers/visibility');

var _helpersVisibility2 = _interopRequireDefault(_helpersVisibility);

var _helpersModule = require('./helpers/module');

var _helpersModule2 = _interopRequireDefault(_helpersModule);

var _helpersHandlebars = require('./helpers/handlebars');

var _helpersHandlebars2 = _interopRequireDefault(_helpersHandlebars);

require('backbone.marionette');

require('backbone.stickit');

(0, _helpersHandlebars2['default'])();

var func = _backbone2['default'].Marionette.Module.create;

_backbone2['default'].Marionette.Module.create = function (app, moduleNames, moduleDefinition) {
  moduleDefinition.namespace = moduleNames;
  func.apply(this, arguments);
};

// build orchestra framework
var Orchestra = {};
_lodash2['default'].extend(Orchestra, _backbone2['default']);
_lodash2['default'].extend(Orchestra, _backbone2['default'].Marionette.extend());

_lodash2['default'].extend(Orchestra, {
  _: _lodash2['default'],
  $: _jquery2['default'],
  Radio: _backboneRadio2['default'],
  Service: _backboneService2['default'],
  Storage: _backboneStorage2['default'],
  Syphon: _backboneSyphon2['default'],
  Cocktail: _backboneCocktail2['default'],
  Route: _backboneRouting.Route,
  Router: _backboneRouting.Router,
  Collection: _mvcCollection2['default'],
  Currency: _helpersCurrency2['default'],
  LocalStorage: _helpersLocalStorage2['default'],
  Translator: _helpersTranslate2['default'],
  Visibility: _helpersVisibility2['default'],
  ModuleHelper: _helpersModule2['default'],
  TouchView: _mixinsTouchView2['default'],

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

exports['default'] = Orchestra;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map
