import { CollectionView } from 'backbone.marionette';
import _ from 'lodash';

const NativeViewMixin = {
  // You might need to override this if you've overridden attachHtml
  attachBuffer: function attachBuffer(collectionView, buffer) {
    collectionView.el.appendChild(buffer);
  }
}

_.extend(CollectionView.prototype, NativeViewMixin);

export default CollectionView;