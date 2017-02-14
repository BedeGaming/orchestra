'use strict';

import Radio from 'backbone.radio';
import numeral from 'numeral';

const channel = Radio.channel('global');

class CurrencyHelper {
  addLocale(code, language) {
    numeral.register('locale', code, language);
  }

  format(amount, decimals = 0, currencyLocale = null) {
    const lang = currencyLocale || channel.request('currencyLocale');

    let formatStr = '$0,0';
    let currencyEnd = false;

    if (lang) {
      numeral.locale(lang);
      let language = numeral.localeData();

      if (language.format) {
        formatStr = language.format;
      }
    }

    if (formatStr.charAt(formatStr.length - 1) === '$') {
      currencyEnd = true;
      formatStr = formatStr.slice(0, -1);
    }

    for (let i = 0; i < decimals; i++) {
      if (i === 0) {
        formatStr += '.';
      }

      formatStr += '0';
    }

    if (currencyEnd) {
      formatStr += '$';
    }

    return numeral(amount).format(formatStr);
  }
}

export default new CurrencyHelper();
