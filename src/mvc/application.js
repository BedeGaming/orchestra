//
// #orchestra/mvc/application.js
//

// extends default Marionette Application with optional namespacing
//
'use strict';

export default {

  initialize(options = {}) {
    this.namespace = options.namespace;
  }

};
