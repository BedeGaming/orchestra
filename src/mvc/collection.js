//
// #orchestra/mvc/collection.js
//

// extends default Backbone Collection with some helpful methods
//
// Available methods are:
//
// ```
// collection.next(model)
// collection.prev(model)
// ```
'use strict';

import Backbone from 'backbone';
import _ from 'lodash';

export var Collection = Backbone.Collection.extend({

  next(model) {
    return this.at((this.indexOf(model) + 1) % _.size(this));
  },

  prev(model) {
    const index = this.indexOf(model) - 1;
    return this.at(index > -1 ? index : _.size(this) - 1);
  }

});
