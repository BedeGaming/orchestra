'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = require('backbone.marionette');

var _redux = require('redux');

var _reduxHelpers = require('../helpers/redux-helpers');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultMapState = function defaultMapState() {
  return {};
};
var defaultMapDispatch = function defaultMapDispatch(dispatch) {
  return { dispatch: dispatch };
};

var ReduxViewMixin = {
  delegateEntityEvents: function delegateEntityEvents() {
    this._delegateEntityEvents(this.model, this.collection);

    // bind each behaviors model and collection events
    this._delegateBehaviorEntityEvents();

    // listen to redux store
    this.connectToStore();

    return this;
  },
  shouldViewRender: function shouldViewRender() {
    return true;
  },
  onStoreUpdated: function onStoreUpdated(oldState, newState) {
    this.state = newState;

    if (this.shouldViewRender(oldState, newState)) {
      this.render();
    }
  },
  connectToStore: function connectToStore() {
    var _this = this;

    if (!_reduxHelpers.provider.store) {
      return;
    }

    var mapState = this.mapState || defaultMapState;
    var mapDispatch = this.mapDispatch || defaultMapDispatch;
    var actions = (0, _redux.bindActionCreators)(mapDispatch(), _reduxHelpers.provider.store.dispatch);
    var currentState = mapState(_reduxHelpers.provider.store.getState());

    this.state = currentState;
    this.actions = actions;

    (0, _reduxHelpers.observeStore)(_reduxHelpers.provider.store, currentState, mapState, function (newState, oldState) {
      _this.onStoreUpdated(oldState, newState);
    });
  },
  serializeData: function serializeData() {
    var data = {};

    // If we have a model, we serialize that
    if (this.model) {
      data = this.serializeModel();
    } else if (this.collection) {
      data = {
        items: this.serializeCollection()
      };
    }

    if (this.state) {
      data.redux = this.state;
    }

    return data;
  }
};

_lodash2.default.extend(_backbone.View.prototype, ReduxViewMixin);

exports.default = _backbone.View;
module.exports = exports['default'];
//# sourceMappingURL=redux-view.js.map
