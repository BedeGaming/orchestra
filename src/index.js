/* jshint -W079 */
'use strict';

import jQuery from 'jquery';
import lodash from './helpers/lodash';
import CoreBackbone from 'backbone';
import BackboneValidation from 'backbone-validation';
import BackboneRadio from 'backbone.radio';
import BackboneService from 'backbone.service';
import BackboneStorage from 'backbone.storage';
import BackboneSyphon from 'backbone.syphon';
import handlebarsHelpers from './helpers/handlebars';
import Marionette from 'backbone.marionette';
import './mvc/redux-view';

export { Route,  Router } from 'backbone-routing';
export * from './helpers/redux-helpers';
export * from './mvc/collection';
export * from './helpers/currency';
export * from './helpers/localStorage';
export * from './helpers/translate';
export * from './helpers/visibility';

if (window.__agent) {
  window.__agent.start(CoreBackbone, Marionette);
}

handlebarsHelpers();

export const attachHelpers = handlebarsHelpers;
export const $ = jQuery;
export const _ = lodash;
export const Service = BackboneService;
export const Storage = BackboneStorage;
export const Radio = BackboneRadio;
export const Backbone = CoreBackbone;
export const BBCollection = CoreBackbone.Collection;
export const Syphon = BackboneSyphon;
export const Validation = BackboneValidation;
export const Model = CoreBackbone.Model;
export const sync = CoreBackbone.sync;
export const history = CoreBackbone.history;
export const History = CoreBackbone.History;
export const Application = Marionette.Application;
export const View = Marionette.View;
export const CollectionView = Marionette.CollectionView;
export const CompositeView = Marionette.CompositeView;
export const Region = Marionette.Region;
export const Behavior = Marionette.Behavior;
