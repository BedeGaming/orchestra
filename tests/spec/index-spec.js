//
// tests/spec/index-spec.js
//
'use strict';

require('../app/support/setup');
var requireNew = require('require-new');
var Orchestra = requireNew('../../src/index.js');

describe('Orchestra', function() {

	it('should expose Marionette classes', function() {
		expect(Orchestra.CompositeView).to.be.a('function');
		expect(Orchestra.Module).to.be.a('function');
	});

	it('should expose the TouchView object', function() {
		expect(Orchestra.TouchView).to.be.an('object');
	});

	it('should expose the Backbone.Radio object', function() {
		expect(Orchestra.Radio).to.be.an('object');
	});

  it('should expose the Backbone.Syphon object', function() {
    expect(Orchestra.Syphon).to.be.an('object');
  });

  it('should expose the Backbone.Validation object', function() {
    expect(Orchestra.Validation).to.be.an('object');
  });

	it('should expose the Backbone.Cocktail object', function() {
		expect(Orchestra.Cocktail).to.be.an('object');
	});

	it('should expose the Collection class', function() {
		expect(Orchestra.Collection).to.be.a('function');
	});

	it('should expose the Currency helper object', function() {
		expect(Orchestra.Currency).to.be.an('object');
	});

	it('should expose the Visibility helper object', function() {
		expect(Orchestra.Visibility).to.be.an('object');
	});

	it('should expose the Translator helper object', function() {
		expect(Orchestra.Translator).to.be.an('object');
	});

	it('should expose the Module helper object', function() {
		expect(Orchestra.ModuleHelper).to.be.an('object');
	});

	it('should expose jQuery', function() {
		expect(Orchestra.$).to.be.a('function');
	});

	it('should expose lodash', function() {
		expect(Orchestra._).to.be.a('function');
	});

	it('should expose the getInstance function', function() {
		expect(Orchestra.getInstance).to.be.a('function');
	});

	describe('getInstance()', function() {
		var component;
		describe('No instance exists', function() {

			it('should have empty object for instances', function() {
				expect(Orchestra.instances).to.eql({})
			});

			it('should return new \'main\' orchestra instance', function() {
				component = Orchestra.getInstance('main');
				expect(component.namespace).to.eql('main');
			});

			it('should store reference for instance in instances object', function() {
				expect(Orchestra.instances.main).to.be.an('object');
				expect(Orchestra.instances.main.namespace).to.eql('main');
			});

		});

		describe('Instance already exists', function() {
		 	it('should return a reference to previously created instance', function() {
		 		expect(Orchestra.getInstance('main')).to.eql(component);
		 	});

		 	it('should delete orchestra instance reference', function() {
		 		component.destroy();
		 		expect(Orchestra.instances).to.eql({});
		 	});
		});

	});

	describe('Module.create()', function() {
		before(function() {
			this.instance = Orchestra.getInstance('main');
		});

		it('should add namespace to options of the module', function() {
			Orchestra.Module.create(this.instance, 'custom.module', {});
			expect(this.instance.custom.module.options.namespace).to.eql('custom.module');
		});
	});

});
