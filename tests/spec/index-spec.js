//
// tests/spec/index-spec.js
//
'use strict';

require('../app/support/setup');
var requireNew = require('require-new');

describe('Orchestra', function() {
	beforeEach(function() {
		this.Orchestra = requireNew('../../src/index.js');
	});

	it('should expose Marionette classes', function() {
		expect(this.Orchestra.View).to.be.a('function');
		expect(this.Orchestra.CollectionView).to.be.a('function');
	});

	it('should expose the Backbone.Radio object', function() {
		expect(this.Orchestra.Radio).to.be.an('object');
	});

  it('should expose the Backbone.Syphon object', function() {
    expect(this.Orchestra.Syphon).to.be.an('object');
  });

  it('should expose the Backbone.Validation object', function() {
    expect(this.Orchestra.Validation).to.be.an('object');
  });

	it('should expose the Collection class', function() {
		expect(this.Orchestra.Collection).to.be.a('function');
	});

	it('should expose the Currency helper object', function() {
		expect(this.Orchestra.Currency).to.be.an('object');
	});

	it('should expose the Visibility helper object', function() {
		expect(this.Orchestra.Visibility).to.be.an('object');
	});

	it('should expose the Translator helper object', function() {
		expect(this.Orchestra.Translator).to.be.an('object');
	});

	it('should expose jQuery', function() {
		expect(this.Orchestra.$).to.be.a('function');
	});

	it('should expose lodash', function() {
		expect(this.Orchestra._).to.be.a('function');
	});

	describe('if window.agent exists', function() {
		beforeEach(function() {
			window.__agent = {
				start: this.sandbox.stub()
			};

			this.Orchestra = requireNew('../../src/index.js');
		});

		it('should call start', function() {
			expect(window.__agent.start.callCount).to.eql(1);
		});
	});
});
