# Touch View Mixin

Orchestra provides a view mixin which enable touch events for use with adaptive web applications. It provides a similar interface to the Backbone view events hash documented [here](http://backbonejs.org/#View-events).

To use it you should provide a hammerEvents hash, and set the events object to `null`, then using Cocktail, mixin the TouchView to enable Hammer functionality.

Mobile Only View
```
var Orchestra = require('orchestra');
var TouchView = Orchestra.TouchView;

var View = Orchestra.ItemView.extend({
  hammerEvents: {
    'tap button': 'doSomething'
  },

  events: null,

  doSomething() {

  }
});

Orchestra.Cocktail.mixin(View, TouchView);

```

Adaptive View:
```
var Orchestra = require('orchestra');
var _ = Orchestra._;
var TouchView = Orchestra.TouchView;

var viewProps = {
  events: {
    'click button': 'doSomething'
  },

  doSomething(e) {

  }
};

var touchMixin = {
  hammerEvents: {
    'tap button': 'doSomething'
  },

  events: null

};

if (isMobile) {
  viewProps = _.merge(viewProps, touchMixin);
}

var View = Orchestra.ItemView.extend(viewProps);

if (isMobile) {
  Orchestra.Cocktail.mixin(View, TouchView);
}

```
