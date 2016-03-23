//
// ## helpers/handlebars
//
// Provides handlebars helpers
//
'use strict';

import HB from 'handlebars/runtime';
import translator from './translate';
import currencyHelper from './currency';

export default function(handlebars) {

  let Handlebars = HB.default;

  if (global.handlebars) {
    Handlebars = global.handlebars;
  }

  if (handlebars) {
    Handlebars = handlebars;
  }

  //
  // place {{ debug }}
  //

  Handlebars.registerHelper('debug', optionalValue => {
    console.log('Current Context');
    console.log('====================');
    console.log(this);

    if (optionalValue) {
      console.log('Value');
      console.log('====================');
      console.log(optionalValue);
    }
  });

  /*
   * call with {{translate "i18n_key" optional parmeters}}
   * the options params are passed to sprintf and used
   * with %s, %d etc
   *
   * full options here: https://github.com/alexei/sprintf.js
   */
  Handlebars.registerHelper('translate', (...args) => {
    var i18nKey = args.shift();

    // remove the options object
    args.pop();

    args.forEach((item, index, array) => {
      if (typeof item === 'function') {
        array[index] = item();
      }
    });

    return new Handlebars.SafeString(translator.translate(i18nKey, args));

  });

  /*
   * call with {{currency amount (decimals)}}
   * amount accepts a number or function
   * which returns a number.
   */
  Handlebars.registerHelper('currency', (amount, decimals) => {
    if (typeof amount === 'function') {
      amount = amount();
    }

    amount = parseFloat(amount);

    if (decimals) {
      decimals = parseInt(decimals, 10);
    }

    var str = currencyHelper.format(amount, decimals);

    return new Handlebars.SafeString(str);
  });

  return Handlebars;
}
