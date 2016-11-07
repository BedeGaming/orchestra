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
import { size } from 'lodash';

export const Collection = Backbone.Collection.extend({

  next(model) {
    return this.at((this.indexOf(model) + 1) % size(this));
  },

  prev(model) {
    const index = this.indexOf(model) - 1;
    return this.at(index > -1 ? index : size(this) - 1);
  }

});
