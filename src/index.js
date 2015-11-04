'use strict';

import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import {Route, Router} from 'backbone-routing';
import Validation from 'backbone-validation';
import Cocktail from 'backbone.cocktail';
import Radio from 'backbone.radio';
import Service from 'backbone.service';
import Storage from 'backbone.storage';
import Syphon from 'backbone.syphon';
import Collection from './mvc/collection';
import Currency from './helpers/currency';
import LocalStorage from './helpers/localStorage';
import Translator from './helpers/translate';
import TouchView from './mixins/touch.view';
import Visibility from './helpers/visibility';
import ModuleHelper from './helpers/module';
import handlebarsHelpers from './helpers/handlebars';
import 'backbone.marionette';
import 'backbone.stickit';

handlebarsHelpers();

var func = Backbone.Marionette.Module.create;

Backbone.Marionette.Module.create = function(app, moduleNames, moduleDefinition) {
  moduleDefinition.namespace = moduleNames;
  func.apply(this, arguments);
};

// build orchestra framework
const Orchestra = {};
_.extend(Orchestra, Backbone);
_.extend(Orchestra, Backbone.Marionette.extend());

_.extend(Orchestra, {
  _,
  $,
  Radio,
  Service,
  Storage,
  Syphon,
  Validation,
  Cocktail,
  Route,
  Router,
  Collection,
  Currency,
  LocalStorage,
  Translator,
  Visibility,
  ModuleHelper,
  TouchView,

  instances: {},

  getInstance(namespace) {
    namespace = namespace || 'main';
    if (!this.instances[namespace]) {
      this.instances[namespace] = new this.Application({
        namespace: namespace
      });
      this.listenTo(this.instances[namespace], 'destroy', () => {
        delete this.instances[namespace];
      });
    }

    return this.instances[namespace];
  }

});

export default Orchestra;
