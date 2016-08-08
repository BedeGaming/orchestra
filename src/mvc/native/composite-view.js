import { CompositeView, getOption, _getValue, Error as MnError } from 'backbone.marionette';
import _ from 'lodash';

const NativeViewMixin = {
  // You might need to override this if you've overridden attachHtml
  attachBuffer: function(compositeView, buffer) {
    var container = this.getChildViewContainer(compositeView);
    container.appendChild(buffer);
  },

  attachElContent: function attachElContent(html) {
    this.el.innerHTML = html;
    return this;
  },

  // Internal method. Append a view to the end of the $el.
  // Overidden from CollectionView to ensure view is appended to
  // childViewContainer
  _insertAfter: function _insertAfter(childView) {
    var $container = this.getChildViewContainer(this, childView);
    $container.appendChild(childView.el);
  },

  // Internal method to ensure an `$childViewContainer` exists, for the
  // `attachHtml` method to use.
  getChildViewContainer: function(containerView, childView) {
    if (!!containerView.$childViewContainer) {
      return containerView.$childViewContainer;
    }

    var container;
    var childViewContainer = containerView.childViewContainer;
    if (childViewContainer) {

      var selector = _.result(containerView, 'childViewContainer');

      if (selector.charAt(0) === '@' && containerView.ui) {
        container = containerView.ui[selector.substr(4)];
      } else {
        container = containerView.el.querySelector(selector);
      }

      if (container.length <= 0) {
        throw new MnError({
          name: 'ChildViewContainerMissingError',
          message: 'The specified "childViewContainer" was not found: ' + containerView.childViewContainer
        });
      }

    } else {
      container = containerView.el;
    }

    containerView.$childViewContainer = container;
    return container;
  },
}

_.extend(CompositeView.prototype, NativeViewMixin);

export default CompositeView;
