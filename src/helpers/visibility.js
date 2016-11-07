//
// expose device capibilities to app object.
//
'use strict';

import $ from 'jquery';
import Radio from 'backbone.radio';
const channel = Radio.channel('main');

class VisibilityHelper {
  constructor() {
    const visProp = this.getHiddenProp();

    if (visProp) {
      const evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
      $(document).on(evtname, () => {
        if (this.isHidden()) {
          channel.request('appHidden');
        } else {
          channel.request('appShowing');
        }
      });
    }
  }

  getHiddenProp() {
    const prefixes = ['webkit', 'moz', 'ms', 'o'];

    // if 'hidden' is natively supported just return it
    if ('hidden' in document) {
      return 'hidden';
    }

    // otherwise loop over all the known prefixes until we find one
    for (let i = 0; i < prefixes.length; i++) {
      if ((prefixes[i] + 'Hidden') in document) {
        return prefixes[i] + 'Hidden';
      }
    }

    // otherwise it's not supported
    return null;
  }

  isHidden() {
    const prop = this.getHiddenProp();
    if (!prop) {
      return false;
    }

    return document[prop];
  }
}

export var Visibility = new VisibilityHelper();
