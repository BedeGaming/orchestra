import { View } from 'backbone.marionette';
import _ from 'lodash';

const NativeViewMixin = {
  attachElContent: function attachElContent(html) {
    this.el.innerHTML = html;
    return this;
  }
}

_.extend(View.prototype, NativeViewMixin);

export default View;