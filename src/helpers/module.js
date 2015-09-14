//
// helpers.modules
//

'use strict';

import _ from 'lodash';

class ModuleHelpers {

  checkRequiredParams(object, params, moduleName) {
    _.each(params, name => {
      if (!object[name]) {
        throw new Error('orchestra:' + moduleName + ' required param ' + name + ' is undefined or null');
      }

      return true;
    });
  }
}

module.exports = new ModuleHelpers();
