# Currency Helper

Orchestra provides a helper for formatting currencies. You have the option to add locales to the helper at any point during your application. Locales should be added in the form of `numeral.js` languages - [docs](http://numeraljs.com/)

The helper is globally accessible throughout your application and is also available as a Handlebars helper.

```js

var Orchestra = require('orchestra');
var gbp = require('numeral/languages/en-gb');
var currencyHelper = Orchestra.Currency;

currencyHelper.addLocale('en-GB', gbp);

console.log(currencyHelper.format(123, 2, 'en-GB')); // outputs: £123.00
```

The API for the format method is as follows:

```js
currencyHelper.format(amount, decimals = 0, locale);
```

If locale is not specified the method will attempt to `request` it from the `global` Radio channel using `Backbone.Radio`, this is a great way to specify a global locale for your application. For example:

```js
var Orchestra = require('orchestra');
var globalChannel = Orchestra.Radio.channel('global');
var currencyHelper = Orchestra.Currency;

currencyHelper.addLocale('en-GB', gbp);


globalChannel.reply({
  currencyLocale: function() {
    return 'en-GB';
  }
});

console.log(currencyHelper.format(123)); // outputs: £123

```

To use the Handlebars helper in your templates do the following: 

```html
<p>{{currency 100 2}}</p> // outputs <p>£100.00</p>
```
