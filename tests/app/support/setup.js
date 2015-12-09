/*jshint -W079 */
'use strict';

var config = {};

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

var fs = require('fs');

// check for translations
var localeExists = fs.existsSync('locales/en-GB.json');

if (localeExists) {
  global.translateStrings = JSON.parse(fs.readFileSync('locales/en-GB.json', 'utf8'));
} else {
  global.translateStrings = {
    'en-GB': {
      translation: {
        stop: 'Stop',
        start: 'Start'
      }
    }
  };
}

global.mockery = require('mockery');
global.expect = require('expect.js');
global.sinon = require('sinon');
global.handlebars = require('handlebars');

mockery.enable({
  warnOnUnregistered: false
});

mockery.registerMock('signalr', {});
mockery.registerMock('modernizr', {});

var Orchestra = require('../../../src/index');
global.Orchestra = Orchestra;
global._ = Orchestra._;
global.$ = Orchestra.$;
global.Radio = Orchestra.Radio;
global.mainChannel = Radio.channel('main');
global.globalChannel = Radio.channel('global');
Orchestra.Translator.addLocale('en-GB', global.translateStrings);

mainChannel.reply({
  config: function() {
    return config;
  }
});

require.extensions['.hbs'] = function(module, filename) {
  module.exports = handlebars.compile(fs.readFileSync(filename).toString());
};

var app = Orchestra.getInstance();
app.start(config);

global.app = app;

beforeEach(function() {
  this.sandbox = sinon.sandbox.create();
});

afterEach(function() {
  this.sandbox.restore();
});
