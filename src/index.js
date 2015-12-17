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

// if (global === window) {
  var f = Backbone.Marionette.LayoutView.prototype.constructor;

  Backbone.Marionette.Region.prototype.getEl = function(el) {
    // console.log(Backbone.Marionette._getValue(this.options.parentEl, this));
    // console.log(this._parent ? this._parent._parent : null);
    // console.log('GETTING EL', el);
    // console.log('THIS', this);
    // console.log(Backbone.Marionette._getValue(this.options.parentEl, this));
    return Backbone.$(el, Backbone.Marionette._getValue(this.options.parentEl, this));
  };

  if (global === window) {
    Backbone.Marionette.LayoutView = Backbone.Marionette.LayoutView.extend({
      render() {
        if (this.onRender) {
          this.onRender();
        }
        return this;
      },

      _buildRegions: function(regions) {
        var defaults = {
          regionClass: this.getOption('regionClass'),
          parentEl: _.partial(_.result, this, 'el')
        };

        return this.regionManager.addRegions(regions, defaults);
      },

      constructor(...args) {
        this._ensureElement();
        this.bindUIElements();
        f.apply(this, args);
      }
    });
  }

  // var regionEnsureElement = Backbone.Marionette.Region.prototype._ensureElement;
  // Backbone.Marionette.Region.prototype._ensureElement = function(...args) {
  //   console.log(this);
  //   regionEnsureElement.apply(this, args);
  // }

  var show = Backbone.Marionette.Region.prototype.show;
  Backbone.Marionette.Region.prototype.show = function(...args) {
    args[0].parentEl = this.el;
    args[0]._ensureElement();
    show.apply(this, args);
  };

  var collectionViewConstructor = Backbone.Marionette.CollectionView.prototype.constructor;
  Backbone.Marionette.CollectionView = Backbone.Marionette.CollectionView.extend({
    buildChildView: function(child, ChildViewClass, childViewOptions) {
      var index = child.collection.indexOf(child);

      var el = this._isRendered ? undefined : this.el.childNodes[index];

      var options = _.extend({model: child, el: el}, childViewOptions);
      var childView = new ChildViewClass(options);
      Backbone.Marionette.MonitorDOMRefresh(childView);
      return childView;
    },

    // constructor(...args) {
    //   this.el = this.el || this.tagName || undefined;
    //   collectionViewConstructor.apply(this, args)
    // }
  });

  var _ensureElement = Backbone.View.prototype._ensureElement;
  Backbone.View.prototype._ensureElement = function() {
    if (this.parentEl) {
      this.el = Backbone.$(_.result(this, 'tagName'), this.parentEl)[0];
    }
    _ensureElement.apply(this);
  }
// }

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
