//
// tests/spec/helpers/translate-spec.js
//
'use strict';

require('../../app/support/setup');
var helperLocation = '../../../src/helpers/translate';
var translateHelper = require(helperLocation);
var fixture = require('../../fixtures/translate/translate.json');

describe('Translate Helper', function() {

	beforeEach(function() {
		this.channel = Radio.channel('global');
	});

	describe('Methods', function() {

		it('should expose a getLocale method', function() {
			expect(translateHelper.getLocale).to.be.a('function');
		});

		it('should expose a addLocale method', function() {
			expect(translateHelper.addLocale).to.be.a('function');
		});

		it('should expose a translate method', function() {
			expect(translateHelper.translate).to.be.a('function');
		});

	});

	describe('getLocale()', function() {

		describe('Default state', function() {

			it('should default to en-GB', function() {
				expect(translateHelper.getLocale()).to.eql('en-GB');
			});
		});

		describe('Config Response - Locale German', function() {

			beforeEach(function() {
				this.channel.reply('config', function () { return fixture.configDE });
			});

			it('should return de-DE', function() {
				expect(translateHelper.getLocale()).to.eql('de-DE');
			});

		});

		describe('Config Response - Locale undefined', function() {

			beforeEach(function() {
				this.channel.reply('config', function () { return fixture.configNA });
			});

			it('should return en-GB', function() {
				expect(translateHelper.getLocale()).to.eql('en-GB');
			});

		});

		describe('Config Response - App undefined', function() {

			beforeEach(function() {
				this.channel.reply('config', function () { return {} });
			});

			it('should return en-GB', function() {
				expect(translateHelper.getLocale()).to.eql('en-GB');
			});

		});

	});

	describe('translate() && addLocale()', function() {

		beforeEach(function() {
			translateHelper.addLocale('en-GB', fixture.lang);
		});

		it('shoule translate il8Key correctly', function() {
			expect(translateHelper.translate('helloWorld')).to.eql('Hello World!');
		});

		it('should subsitute number into translated text', function() {
			expect(translateHelper.translate('buyNTickets', [2])).to.eql('Buy 2 tickets?');
		});

	});

});