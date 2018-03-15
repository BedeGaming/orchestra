'use strict';

import { View } from 'backbone.marionette';

const InfernoView = View.extend({
  _renderTemplate() {
    const template = this.getTemplate();

    // Allow template-less views
    if (template === false) {
      return;
    }

    // Add in entity data and template context
    const data = this.mixinTemplateContext(this.serializeData());

    // Render and add to el
    const html = this._renderHtml(template, data);

    if (html) {
      this.attachElContent(html);
    }
  }
});

export default InfernoView;
