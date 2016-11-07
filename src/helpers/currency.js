'use strict';

import Radio from 'backbone.radio';
import numbro from 'numbro';

const channel = Radio.channel('global');

class CurrencyHelper {
  addLocale(code, language) {
    numbro.culture(code, language);
  }

  format(amount, decimals = 0, currencyLocale = null) {
    const lang = currencyLocale || channel.request('currencyLocale');

    let formatStr = '$0,0';

    if (lang) {
      numbro.culture(lang);
      let language = numbro.cultureData();
      if (language.format) {
        formatStr = language.format;
      }
    }

    for (let i = 0; i < decimals; i++) {
      if (i === 0) {
        formatStr += '.';
      }

      formatStr += '0';
    }

    return numbro(amount).format(formatStr);
  }
}

export var Currency = new CurrencyHelper();
