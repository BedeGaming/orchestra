//
// tests/spec/mixins/touch.view-spec.js
//
'use strict';

require('../../app/support/setup');
var touch = require('../../../src/mixins/touch.view');
var fix = require('../../fixtures/mixins/touch.view');

function called(state, once) {
  return function(method) {
    var called = once ? 'calledOnce' : 'called';

    describe(method, function() {
      var view;
      beforeEach(function(done) {
        sinon.spy(touch, method);
        view = fix.boot(touch);
        done();
      });

      afterEach(function (done) {
        touch[method].restore();
        view.destroy();
        done();
      });

      it('should be ' + called, function(done) {
        expect(touch[method][called]).to.be(state);
        done();
      });
    });
  }
}

var isCalledOnce = called(true, true);
var notCalledOnce = called(false, true);
var isCalled = called(true);
var isNotCalled = called(false);

describe('Mixins - Touch View', function() {

  describe('Methods', function() {

    it('should expose the delegateEvents function', function() {
      expect(touch.delegateEvents).to.be.a('function');
    });

    it('should expose the undelegateEvents function', function() {
      expect(touch.undelegateEvents).to.be.a('function');
    });

    it('should have a "hidden" empty array to contain hammer instances', function() {
      expect(touch._hammerInstances).to.be.a('array');
      expect(touch._hammerInstances.length).to.eql(0);
    });

    it('should have a "hidden" _delegateHammerEvents function', function() {
      expect(touch._delegateHammerEvents).to.be.a('function');
    });

    it('should have a "hidden" _undelegateHammerEvents function', function() {
      expect(touch._undelegateHammerEvents).to.be.a('function');
    });

    it('should have a "hidden" _hammer function', function() {
      expect(touch._hammer).to.be.a('function');
    });

    it('should have a "hidden" _unhammer function', function() {
      expect(touch._unhammer).to.be.a('function');
    });

  });

  describe('Event Delegation', function() {

    [
      'delegateEvents',
      '_delegateHammerEvents'
    ].forEach(isCalledOnce);

    [
      'undelegateEvents',
      '_hammer',
      '_unhammer'
    ].forEach(isCalled);

    it('should create an instance of hammer.js manager', function() {
      var view = fix.boot(touch);
      expect(view._hammerInstances.length).to.be(1);
    });

    it('should create 0 instances of hammer.js manager', function() {
      delete touch.hammerEvents;
      var view = fix.boot(touch, { hammerEvents: false });
      expect(view._hammerInstances.length).to.be(0);
      touch.hammerEvents = {};
    });

    describe('delegateEvents() (No callback exists)', function() {

      beforeEach(function() {
        this._hammerSpy = this.sandbox.spy(touch, '_hammer');
        this.view = fix.boot(touch, { dummyMethod: false });
      });

      it('should not call _hammer() function', function() {
        expect(this._hammerSpy.called).to.be(false);
      });
    });

    describe('delegateEvents() (Explicit callback passed)', function() {

      beforeEach(function() {
        this._cbSpy = sinon.spy();
        this.view = fix.boot(touch, { hammerEvents: { 'tap button': this._cbSpy } });
      });

      it('should not call _hammer() function', function() {
        expect(this._cbSpy.called).to.be(false);
      });
    });

    describe('_hammer()', function() {
      it('returns false if this.$el is not set', function() {
        expect(touch._hammer()).to.eql(false);
      });

      it('returns false if this.$el has no length', function() {
        touch.$el = [];
        expect(touch._hammer()).to.eql(false);
        delete touch.$el;
      });
    });

    describe('undelegateEvents()', function() {

      it('should remove hammer.js instances', function() {
        var view = fix.boot(touch);
        view.undelegateEvents();
        expect(view._hammerInstances.length).to.be(0);
      });

    });

    describe('Event handler (with selector)', function() {
      beforeEach(function() {
        this.cb = sinon.spy();
        this.view = fix.boot(touch);
        this.handler = this.view._getEventHandler('button', this.cb);
        this.buttonEl = this.view.$el.find('button').get(0);

      });

      it('should call the callback function', function() {
        this.handler({target:this.buttonEl});
        expect(this.cb.calledOnce).to.be(true);
      });

      it('should not call the callback function', function() {
        this.handler({});
        expect(this.cb.called).to.be(false);
      });
    });

    describe('Event handler (without selector)', function() {
      beforeEach(function() {
        this.cb = sinon.spy();
        this.view = fix.boot(touch);
        this.handler = this.view._getEventHandler(null, this.cb);
        this.El = this.view.$el.get(0);

      });

      it('should call the callback function', function() {
        this.handler({target:this.El});
        expect(this.cb.calledOnce).to.be(true);
      });

    });

  });

});
