import { CollectionView, isNodeAttached } from 'backbone.marionette';
import { View as BBView } from 'backbone';
import _ from 'lodash';

const NativeViewMixin = {
  // You might need to override this if you've overridden attachHtml
  attachBuffer: function attachBuffer(collectionView, buffer) {
    collectionView.el.appendChild(buffer);
  },

  // Overriding Backbone.View's `setElement` to handle
  // if an el was previously defined. If so, the view might be
  // rendered or attached on setElement.
  setElement: function setElement() {
    var hasEl = !!this.el;

    BBView.prototype.setElement.apply(this, arguments);

    if (hasEl) {
      this._isRendered = !!this.el.children.length;
      this._isAttached = isNodeAttached(this.el);
    }

    return this;
  }
}

_.extend(CollectionView.prototype, NativeViewMixin);

export default CollectionView;
