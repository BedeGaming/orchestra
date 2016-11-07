'use strict';

import jQuery from 'jquery';
import lodash from 'lodash';
import Backbone from 'backbone';
import BackboneValidation from 'backbone-validation';
import BackboneRadio from 'backbone.radio';
import BackboneService from 'backbone.service';
import BackboneStorage from 'backbone.storage';
import BackboneSyphon from 'backbone.syphon';
import handlebarsHelpers from './helpers/handlebars';
import Marionette from 'backbone.marionette';
import 'backbone.stickit';
export { Route,  Router } from 'backbone-routing';

export * from './mvc/collection';
export * from './helpers/currency';
export * from './helpers/localStorage';
export * from './helpers/translate';
export * from './helpers/visibility';

if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}

handlebarsHelpers();

export var $ = jQuery;
export var _ = lodash;
export var Service = BackboneService;
export var Storage = BackboneStorage;
export var Radio = BackboneRadio;
export var Syphon = BackboneSyphon;
export var Validation = BackboneValidation;
export var Model = Backbone.Model;
export var Sync = Backbone.Sync;
export var history = Backbone.history;
export var History = Backbone.History;
export var Application = Marionette.Application;
export var View = Marionette.View;
export var CollectionView = Marionette.CollectionView;
export var CompositeView = Marionette.CompositeView;
export var Region = Marionette.Region;
export var Behavior = Marionette.Behavior;
