'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = require('backbone.marionette');

var InfernoView = _backbone.View.extend({
  _renderTemplate: function _renderTemplate() {
    var template = this.getTemplate();

    // Allow template-less views
    if (template === false) {
      return;
    }

    // Add in entity data and template context
    var data = this.mixinTemplateContext(this.serializeData());

    // Render and add to el
    var html = this._renderHtml(template, data);

    if (html) {
      this.attachElContent(html);
    }
  }
});

exports.default = InfernoView;
module.exports = exports['default'];
//# sourceMappingURL=inferno-view.js.map
