import { View } from 'backbone.marionette';
import { bindActionCreators } from 'redux';
import { observeStore, provider } from '../helpers/redux-helpers';
import _ from 'lodash';

const defaultMapState = () => ({});
const defaultMapDispatch = dispatch => ({ dispatch });

const ReduxViewMixin = {
  delegateEntityEvents() {
    this._delegateEntityEvents(this.model, this.collection);

    // bind each behaviors model and collection events
    this._delegateBehaviorEntityEvents();

    // listen to redux store
    this.connectToStore();

    return this;
  },

  onStoreUpdated() {
    this.render();
  },

  connectToStore() {
    if (!provider.store) {
      return;
    }

    const mapState = this.mapState || defaultMapState;
    const mapDispatch = this.mapDispatch || defaultMapDispatch;
    const actions = bindActionCreators(mapDispatch(), provider.store.dispatch);
    const currentState = mapState(provider.store.getState());

    this.state = currentState;
    this.actions = actions;

    observeStore(provider.store, currentState, mapState, (newState, oldState) => {
      this.state = newState;
      if (typeof this.onStoreUpdated === 'function') this.onStoreUpdated(oldState);
    });
  },

  serializeData() {
    let data = {};

    // If we have a model, we serialize that
    if (this.model) {
      data = this.serializeModel();
    } else if (this.collection) {
      data = {
        items: this.serializeCollection()
      }
    }

    if (this.state) {
      data.redux = this.state;
    }

    return data;
  }
}

_.extend(View.prototype, ReduxViewMixin);

export default View;
