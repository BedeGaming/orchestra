//
// tests/spec/helpers/visibility-spec.js
//
'use strict';

require('../../app/support/setup');
var helperLocation = '../../../src/helpers/visibility';
var requireNew = require('require-new');

describe('Visibility Helper', function() {

  beforeEach(function() {
    this.channel = Radio.channel('main');
    this.appHidden = sinon.spy();
    this.appShowing = sinon.spy();

    this.channel.reply('appHidden', this.appHidden);
    this.channel.reply('appShowing', this.appShowing);
  });

  describe('Methods', function() {

    beforeEach(function() {
      this.visibilityHelper = requireNew(helperLocation).Visibility;
    });

    it('should expose a getHiddenProp function', function() {
      expect(this.visibilityHelper.getHiddenProp).to.be.a('function');
    });

    it('should expose a isHidden function', function() {
      expect(this.visibilityHelper.isHidden).to.be.a('function');
    });

  });

  describe('No hidden properties are set', function() {

    beforeEach(function() {
      document.hidden = true; // force bind visibility event listener
      this.visibilityHelper = requireNew(helperLocation).Visibility;
      delete document.hidden;
      this.event = document.createEvent("HTMLEvents");
      this.event.initEvent("visibilitychange", true, true);
    });

    it('should not have property', function() {
      expect(this.visibilityHelper.getHiddenProp()).to.be(null);
    });

    it('should not be hidden', function() {
      expect(this.visibilityHelper.isHidden()).to.be(false);
    });

    it('it should make radio request to appHidden', function() {
      document.dispatchEvent(this.event);
      expect(this.appShowing.called).to.be(true);
    });

  });

  describe('document.hidden exists', function () {
    beforeEach(function() {
      document.hidden = true;
      this.visibilityHelper = requireNew(helperLocation).Visibility;
      this.event = document.createEvent("HTMLEvents");
      this.event.initEvent("visibilitychange", true, true);

    });

    afterEach(function() {
      delete document.hidden;
    });

    describe('isHidden()', function() {
      it('should be true', function() {
        expect(this.visibilityHelper.isHidden()).to.be(true);
      });
    });

    describe('getHiddenProp()', function() {
      it('should return hidden property', function() {
        expect(this.visibilityHelper.getHiddenProp()).to.eql('hidden');
      });
    });

    it('should make radio request to appShowing', function() {
      document.dispatchEvent(this.event);
      expect(this.appHidden.called).to.be(true);
    });
  });

  describe('document.{vendorPrefix}Hidden exists', function () {
    beforeEach(function() {
      this.vendorPrefix = 'webkit';
      document.webkitHidden = true;
      this.visibilityHelper = requireNew(helperLocation).Visibility;
      this.event = document.createEvent("HTMLEvents");
      this.event.initEvent(
        this.vendorPrefix + "visibilitychange", true, true
      );

    });

    afterEach(function() {
      delete document.webkitHidden;
    });

    describe('isHidden()', function() {
      it('should be true', function() {
        expect(this.visibilityHelper.isHidden()).to.be(true);
      });
    });

    describe('getHiddenProp()', function() {
      it('should return hidden property', function() {
        expect(this.visibilityHelper.getHiddenProp()).to.eql(this.vendorPrefix + 'Hidden');
      });
    });

    it('should make radio request to appShowing', function() {
      document.dispatchEvent(this.event);
      expect(this.appHidden.called).to.be(true);
    });
  });

});
