# Visibility Helper

Orchestra's Visibility helper is a hidden benefit of the library, it will listen for events from the Page Visibility API (taking into account vendor prefixes for you). When it receives a `visibilitychanged` event the helper will either fire either an `appHidden` or `appShown` request on the `main` Radio channel.

```js
var Orchestra = require('orchestra');
var mainChannel = Orchestra.Radio.channel('main');

mainChannel.reply(
  appHidden: function() {
    // do something
  },
  appShown: function() {
    // do something
  }
);
```
