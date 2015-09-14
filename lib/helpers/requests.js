//
// helpers.requests
//
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var requests = [];

exports['default'] = function (data) {
  if (data.logging) {
    return window.provider.postMessage(JSON.stringify(data));
  }

  if (window.provider && requests.indexOf(data.request) === -1) {
    window.provider.postMessage(JSON.stringify({
      event: data.request,
      data: data.data || null
    }));

    if (data.limitDuplicateRequests) {
      requests.push(data.request);
    }
  }

  if (data.response && data.callback) {
    (function () {
      var func = data.callback;
      document.addEventListener(data.response, function (data) {
        func(data.detail);
      });
    })();
  }
};

module.exports = exports['default'];
//# sourceMappingURL=../helpers/requests.js.map