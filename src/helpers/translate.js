//
// helpers.translate
//
'use strict';

import i18next from 'i18next';
import Radio from 'backbone.radio';
import sprintf from 'i18next-sprintf-postprocessor';

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
    const options = {
      postProcess: 'sprintf',
      sprintf: params
    };

    i18next
      .use(sprintf)
      .init({
        compatibilityJSON: 'v2',
        nsSeparator: false,
        keySeparator: false,
        lng: locale,
        resources: resources[locale]
      }, (err, translate) => {
        if (params && params.count) {
          options.count = params.count;
        }
        result = translate(i18nKey, options);
      });

    return result;
  }
}

export const Translator = new TranslateHelpers();
