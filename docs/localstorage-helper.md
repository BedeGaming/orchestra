# Local Storage Helper

Orchestra provides some convenience methods when dealing with LocalStorage, the main benefit being that objects will be automatically stringified on `set` and parsed back on `get` to save you doing this manually.

```js
var Orchestra = require('orchestra');
var lStorage = Orchestra.LocalStorage;

var config = {
  name: 'Orchestra',
  type: 'library'
};

lStorage.setItem('config', config); // will save as: "{"name": "Orchestra", "type": "library"}"

console.log(lStorage.getItem('config')); // outputs the JS object

lStorage.removeItem('config'); // removes the item
lStorage.clear(); // removes everything
```
