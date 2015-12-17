if (!global.document || !global.window) {
  var jsdom = require('jsdom').jsdom;

  global.document = jsdom('<html><head><script></script></head><body><div id="container"></div></body></html>', {
    FetchExternalResources: ['script'],
    ProcessExternalResources: ['script'],
    MutationEvents: '2.0',
    QuerySelector: false
  });

  global.window = document.defaultView;
  global.navigator = global.window.navigator;

  window.localStorage = require('localStorage');
  window.sessionStorage = require('localStorage');
}

var handlebars = require('handlebars');
var fs = require('fs');

require.extensions['.hbs'] = function(module, filename) {
  module.exports = handlebars.compile(fs.readFileSync(filename).toString());
};
