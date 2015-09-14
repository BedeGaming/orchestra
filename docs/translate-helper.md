# Translation Helper

Orchestra provides a helper for handling multi-lingual applications. You have the option to add langauge configs to the helper at any point during your application. The helper is globally accessible throughout your application and is also available as a Handlebars helper. Languages should be added in the follow format:

```js

var Orchestra = require('orchestra');
var enGB = {
  'yes': 'Yes',
  'confirm' 'Please confirm'
};
var translateHelper = Orchestra.Translate;

translateHelper.addLocale('en-GB', enGB);

console.log(translateHelper.translate('confirm')); // outputs: Please confirm
```

The API for the format method is as follows:

```js
translateHelper.translate(i18nKey, params);
```

The default locale is `en-GB` in order to give your application a different locale you should make a configuration object available on the `global` Radio channel.

```js
var Orchestra = require('orchestra');
var globalChannel = Orchestra.Radio.channel('global');
var translateHelper = Orchestra.Translate;

translateHelper.addLocale('en-GB', gbp);


globalChannel.reply({
  config: function() {
    return {
      app: {
        locale: 'en-GB'
      }
    };
  }
});

console.log(translateHelper.translate('yes')); // outputs: Yes

```

To use the Handlebars helper in your templates do the following: 

```html
<p>{{translate 'confirm'}}</p> // outputs <p>Please confirm</p>
```
