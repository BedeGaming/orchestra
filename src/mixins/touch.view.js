//
// #orchestra/mixins/touch.view.js
//
'use strict';

import Backbone from 'backbone';
import Hammer from 'hammerjs';
import _ from 'lodash';
import $ from 'jquery';

const delegateEventSplitter = /^(\S+)\s*(.*)$/;

export default {

  hammerEvents: {},

  _hammerInstances: [],

  undelegateEvents() {
    this._undelegateHammerEvents();
  },

  _undelegateHammerEvents() {
    this._unhammer();
  },

  delegateEvents() {
    this._delegateHammerEvents();
    return this;
  },

  _delegateHammerEvents(events) {
    const options = _.defaults(this.hammerOptions || {}, Backbone.hammerOptions);

    if (!(events || (events = _.result(this, 'hammerEvents')))) {
      return this;
    }

    _.each(events, (eventItem, key) => {
      let method = eventItem;

      if (!_.isFunction(method)) {
        method = this[eventItem];
      }

      if (method) {
        const match = key.match(delegateEventSplitter);
        const selector = match[2];
        let eventName = match[1];

        method = _.bind(method, this);
        this._hammer(options, selector, eventName, method);
      }

    });

    return this;
  },

  _getEventHandler(selector, method) {
    return (e) => {
      let context = this.$el;

      if (selector) {
        context = context.find(selector);
      }

      context.each((i, el) => {
        let $el = $(el);

        if (el === e.target || $el.has(e.target).length) {
          let event = _.extend(e, {currentTarget: el});
          method(event);
        }
      });
    };
  },

  _hammer(options, selector, eventName, method) {
    if (!this.$el || !this.$el.length) return false;

    let hammer = new Hammer(this.$el.get(0), _.clone(options));
    let handler = this._getEventHandler(selector, method);

    hammer.on(eventName, handler);
    this._hammerInstances.push(hammer);
  },

  _unhammer() {
    _.each(this._hammerInstances, (i) => i.destroy());
    this._hammerInstances = [];
  }
};
