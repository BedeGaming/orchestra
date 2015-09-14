//
// helpers.translate
//
'use strict';

import i18next from 'i18next-client';
import Radio from 'backbone.radio';

const resources = {};
const channel = Radio.channel('global');

class TranslateHelpers {

  getLocale() {
    let locale = 'en-GB';

    if (channel.request('config')) {
      const config = channel.request('config');

      if (config.app) {
        locale = config.app.locale || 'en-GB';
      }
    }

    return locale;
  }

  addLocale(key, resStore) {
    resources[key] = resStore;
  }

  translate(i18nKey, params) {
    const locale = this.getLocale();
    let result = null;

    i18next.init({
      lng: locale,
      resStore: resources[locale]
    }, (err, translate) => {
      result = translate(i18nKey, {
        postProcess: 'sprintf',
        sprintf: params
      });
    });

    return result;
  }
}

export default new TranslateHelpers();
