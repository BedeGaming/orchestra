//
// #orchestra/storage/local.js
//

// Provides a localStorage adapter to the application.
//
// Available methods are:
//
// ```
// adapter.setItem()
// adapter.getItem()
// adapter.removeItem()
// adapter.clear()
// ```
'use strict';

class LocalStorageHelper {

  setItem(name, item) {
    if (typeof item === 'object') {
      window.localStorage.setItem(name, window.JSON.stringify(item));
    } else {
      window.localStorage.setItem(name, item);
    }
  }

  getItem(name) {
    let item = window.localStorage.getItem(name);

    if (typeof item !== 'undefined' && item !== null) {
      try {
        item = window.JSON.parse(item);
      } catch (e) {}
    }

    return item;
  }

  removeItem(name) {
    window.localStorage.removeItem(name);
  }

  clear() {
    window.localStorage.clear();
  }

}

export const LocalStorage = new LocalStorageHelper();
