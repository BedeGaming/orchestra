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

	it('should expose the TouchView object', function() {
		expect(this.Orchestra.TouchView).to.be.an('object');
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

  it('should expose the Backbone.Validation object', function() {
    expect(Orchestra.Validation).to.be.an('object');
  });

	it('should expose the Backbone.Cocktail object', function() {
		expect(this.Orchestra.Cocktail).to.be.an('object');
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

	it('should expose the Module helper object', function() {
		expect(this.Orchestra.ModuleHelper).to.be.an('object');
	});

	it('should expose jQuery', function() {
		expect(this.Orchestra.$).to.be.a('function');
	});

	it('should expose lodash', function() {
		expect(this.Orchestra._).to.be.a('function');
	});

	it('should expose the getInstance function', function() {
		expect(this.Orchestra.getInstance).to.be.a('function');
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

	describe('getInstance()', function() {
		var component;
		describe('No instance exists', function() {

			it('should have empty object for instances', function() {
				expect(this.Orchestra.instances).to.eql({})
			});

			it('should return new \'main\' orchestra instance', function() {
				component = this.Orchestra.getInstance('main');
				expect(component.options.namespace).to.eql('main');
			});

			it('should store reference for instance in instances object', function() {
				this.Orchestra.getInstance('main');
				expect(this.Orchestra.instances.main).to.be.an('object');
				expect(this.Orchestra.instances.main.options.namespace).to.eql('main');
			});

		});

		describe('Instance already exists', function() {
		 	it('should return a reference to previously created instance', function() {
		 		component = this.Orchestra.getInstance('main');
		 		expect(this.Orchestra.getInstance('main')).to.eql(component);
		 	});

		 	it('should delete orchestra instance reference', function() {
		 		component.destroy();
		 		expect(this.Orchestra.instances).to.eql({});
		 	});
		});
	});

});
