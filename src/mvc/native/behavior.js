import { Behavior } from 'backbone.marionette';
import _ from 'lodash';

const NativeBehaviorMixin = {
  getEvents: function() {
    // Normalize behavior events hash to allow
    // a user to use the @ui. syntax.
    var behaviorEvents = this.normalizeUIKeys(_.result(this, 'events'));

    // binds the handler to the behavior and builds a unique eventName
    return behaviorEvents;
  },
}

_.extend(Behavior.prototype, NativeBehaviorMixin);

export default Behavior;
