'use strict';

import Radio from 'backbone.radio';
import numeral from 'numeral';

const channel = Radio.channel('global');

class CurrencyHelper {
  addLocale(code, language) {
    numeral.language(code, language);
  }

  format(amount, decimals = 0, currencyLocale = null) {
    const lang = currencyLocale || channel.request('currencyLocale');

    let format = '$0,0';

    if (lang) {
      numeral.language(lang);
      let language = numeral.languageData();
      if (language.format) {
        format = language.format;
      }
    }

    for (let i = 0; i < decimals; i++) {
      if (i === 0) {
        format += '.';
      }

      format += '0';
    }

    return numeral(amount).format(format);
  }
}

export default new CurrencyHelper();
