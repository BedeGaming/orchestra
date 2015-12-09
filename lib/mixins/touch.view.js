//
// #orchestra/mixins/touch.view.js
//
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = require('backbone');

var _backbone2 = _interopRequireDefault(_backbone);

var _hammerjs = require('hammerjs');

var _hammerjs2 = _interopRequireDefault(_hammerjs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var delegateEventSplitter = /^(\S+)\s*(.*)$/;

exports.default = {

  hammerEvents: {},

  _hammerInstances: [],

  undelegateEvents: function undelegateEvents() {
    this._undelegateHammerEvents();
  },
  _undelegateHammerEvents: function _undelegateHammerEvents() {
    this._unhammer();
  },
  delegateEvents: function delegateEvents() {
    this._delegateHammerEvents();
    return this;
  },
  _delegateHammerEvents: function _delegateHammerEvents(events) {
    var _this = this;

    var options = _lodash2.default.defaults(this.hammerOptions || {}, _backbone2.default.hammerOptions);

    if (!(events || (events = _lodash2.default.result(this, 'hammerEvents')))) {
      return this;
    }

    _lodash2.default.each(events, function (eventItem, key) {
      var method = eventItem;

      if (!_lodash2.default.isFunction(method)) {
        method = _this[eventItem];
      }

      if (method) {
        var match = key.match(delegateEventSplitter);
        var selector = match[2];
        var eventName = match[1];

        method = _lodash2.default.bind(method, _this);
        _this._hammer(options, selector, eventName, method);
      }
    });

    return this;
  },
  _getEventHandler: function _getEventHandler(selector, method) {
    var _this2 = this;

    return function (e) {
      var context = _this2.$el;

      if (selector) {
        context = context.find(selector);
      }

      context.each(function (i, el) {
        var $el = (0, _jquery2.default)(el);

        if (el === e.target || $el.has(e.target).length) {
          var event = _lodash2.default.extend(e, { currentTarget: el });
          method(event);
        }
      });
    };
  },
  _hammer: function _hammer(options, selector, eventName, method) {
    if (!this.$el || !this.$el.length) return false;

    var hammer = new _hammerjs2.default(this.$el.get(0), _lodash2.default.clone(options));
    var handler = this._getEventHandler(selector, method);

    hammer.on(eventName, handler);
    this._hammerInstances.push(hammer);
  },
  _unhammer: function _unhammer() {
    _lodash2.default.each(this._hammerInstances, function (i) {
      return i.destroy();
    });
    this._hammerInstances = [];
  }
};
module.exports = exports['default'];
//# sourceMappingURL=touch.view.js.map
