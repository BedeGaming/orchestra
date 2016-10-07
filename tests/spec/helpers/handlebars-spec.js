/*jshint -W079 */
'use strict';

var handlebars = require('handlebars');
require('../../../src/helpers/handlebars')(handlebars);

describe('handlebars Helpers', function() {

  beforeEach(function() {
    this.sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  describe('Handlebars helpers object', function() {

    it('should have a \'debug\' method', function() {
      expect(handlebars.helpers.debug).to.be.ok();
    });

    it('should have a \'translate\' method', function() {
      expect(handlebars.helpers.translate).to.be.ok();
    });

    it('should have a currency method', function() {
      expect(handlebars.helpers.currency).to.be.ok();
    });

  });

  describe('debug', function() {
    beforeEach(function() {
      this.debug = handlebars.helpers.debug;
      this.logSpy = this.sandbox.stub(console, 'log', function() {});
    });

    it('should call console log with test string as argument', function() {
      var test = 'Test String';
      this.debug(test);
      expect(this.logSpy.calledWith(test)).to.be(true);
    });

    it('should call console log with \'Current Context\' as argument', function() {
      this.debug();
      expect(this.logSpy.calledWith('Current Context')).to.be(true);
    });

  });

  describe('translate', function() {

    beforeEach(function() {
      this.translate = handlebars.helpers.translate;
    });

    describe('Looking Up Translations', function() {

      it('should return a SafeString', function() {
        expect(this.translate('game_info')).to.be.a(handlebars.SafeString);
      });

      it('the SafeString.toString() method should return the correct translation', function() {
        var safeString = this.translate('stop');
        expect(safeString.toString()).to.be('Stop');
      });

    });

    describe('String Replacement', function() {

      it('should insert parameters into string in order', function() {
        var str = 'Buy %d tickets and get %d tickets FREE! When you buy %d or more.';
        var strData = this.translate(str, 1, 2, 3, {}).toString();
        expect(strData).to.be('Buy 1 tickets and get 2 tickets FREE! When you buy 3 or more.');
      });

    });

    describe('Function Result Replacement', function() {

      it('should insert parameter which is result of provided function', function() {
        var str = 'Buy %d tickets';
        var strData = this.translate(str, function() { return 1; }, {}).toString();
        expect(strData).to.be('Buy 1 tickets');
      });

    });

  });

  describe('pluralize', function() {

    beforeEach(function() {
      this.pluralize = handlebars.helpers.pluralize;
    });

    it('should return a Handlebars.SafeString', function() {
      var safeString = this.pluralize('day', 2);
      expect(safeString).to.be.a(handlebars.SafeString);
    });

    it('should return a plural form of the word (4)', function() {
      expect(this.pluralize('day', 4).toString()).to.be('days');
    });

    it('should return a singular form of the word if no count is given (undefined)', function() {
      expect(this.pluralize('day').toString()).to.be('day');
    });

    it('should return a singular form of the word (1)', function() {
      expect(this.pluralize('day', 1).toString()).to.be('day');
    });

    it('should return a plural form of the word (3)', function() {
      expect(this.pluralize('day', 2).toString()).to.be('days');
    });

    it('should return a plural form of the word (0)', function() {
      expect(this.pluralize('day', 0).toString()).to.be('days');
    });

  });

  describe('currency', function() {

    beforeEach(function() {
      this.currency = handlebars.helpers.currency;
      globalChannel.reply('currencyLocale', function() {
        return 'en-GB';
      });
    });

    it('should return a Handlebars.SafeString', function() {
      var safeString = this.currency(10, 2);
      expect(safeString).to.be.a(handlebars.SafeString);
    });

    it('should return the currency in the correct format', function() {
      expect(this.currency(1.2, 2).toString()).to.be('£1.20');
    });

    it('should return the currency in the correct format', function() {
      expect(this.currency(1.2).toString()).to.be('£1');
    });

  });

});
