'use strict';

require('../../app/support/setup');
var currencyHelper = require('../../../src/helpers/currency');
var enGB = require('numeral/languages/en-gb');
var usd = require('numeral/languages/en-gb');
var currency = require('../../fixtures/currency/currency');

describe('Currency Helper', function() {
  beforeEach(function() {
    currencyHelper.addLocale('en-GB', enGB);
    currencyHelper.addLocale('customFormat', currency.customFormat);
  });

  afterEach(function() {
    globalChannel.request.restore();
  });

  describe('GBP', function() {

    it('should return the expected string', function() {
      this.sandbox.stub(globalChannel, 'request').returns('en-GB');
      var currencyString = currencyHelper.format(10, 2);
      expect(currencyString).to.be('£10.00');
    });

  });

  describe('Default', function() {

    it('should return the expected string', function() {
      this.sandbox.stub(globalChannel, 'request').returns('en');
      var currencyString = currencyHelper.format(20, 2);
      expect(currencyString).to.be('$20.00');
    });

  });

  describe('Custom Format', function () {
    it('should return the string in the expected format', function () {
      this.sandbox.stub(globalChannel, 'request').returns('customFormat');
      var currencyString = currencyHelper.format(20, 0);
      expect(currencyString).to.be('20 points');
    });
  });

  describe('Currency Locale parameter', function () {
    it('should use the locale param and return the string in the expected format', function () {
      this.sandbox.stub(globalChannel, 'request').returns('customFormat');
      var currencyString = currencyHelper.format(20, 0, 'en-GB');
      expect(currencyString).to.be('£20');
    });
  });

});
