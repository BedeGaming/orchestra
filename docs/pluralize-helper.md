# Pluralize Helper

Orchestra provides a helper to pluralize words when appropriate.

In order to make it work you need to have a singular and plural strings defined in your locale
```js
var enGB = {
  'en-GB': {
    'translation': {
      'day': 'day',
      'day_plural': 'days'
    }
  }
};
```

You would use this helper in your handlebars template like so:
```js

{{pluralize "day" 0}}  // renders 'days'
{{pluralize "day" 1}}  // renders 'day'
{{pluralize "day"}}    // renders 'day' (default behaviour)

```
