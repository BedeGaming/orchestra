'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provider = undefined;
exports.shallowEqual = shallowEqual;
exports.observeStore = observeStore;
exports.configureStore = configureStore;

var _redux = require('redux');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

function shallowEqual(objA, objB) {
  if (objA === objB) return true;

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

function observeStore(store, currState, select, onChange) {
  if (typeof onChange !== 'function') return null;
  var currentState = currState || {};

  function handleChange() {
    var nextState = select(store.getState());
    if (!shallowEqual(currentState, nextState)) {
      var previousState = currentState;
      currentState = nextState;
      onChange(currentState, previousState);
    }
  }

  var unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}

var provider = exports.provider = {
  set store(store) {
    this._store = store;
  },

  get store() {
    return this._store;
  }
};

function configureStore(reducer, preloadedState) {
  var middleware = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  return (0, _redux.createStore)(reducer, preloadedState, composeEnhancers(_redux.applyMiddleware.apply(undefined, _toConsumableArray(middleware))));
}
//# sourceMappingURL=redux-helpers.js.map
