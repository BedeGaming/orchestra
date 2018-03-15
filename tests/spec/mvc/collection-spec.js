//
// tests/app/collections/base
//
'use strict';

require('../../app/support/setup');

var Collection = require('../../../src/mvc/collection').Collection;
var Backbone = require('backbone');

describe('Base collection', function() {

  beforeEach(function() {
    this.collection = new Collection();
    this.collection.url = '/examples';
  });

  it('should provide a new instance of controller', function() {
    expect(this.collection instanceof Backbone.Collection).to.be.ok();
  });

  it('should have a next property', function() {
    expect(this.collection).to.have.property('next');
  });

  it('should have a prev property', function() {
    expect(this.collection).to.have.property('prev');
  });

  it('should return a URI-encoded URL', function() {
    expect(this.collection.url).to.eql('/examples');
  });

});

describe('Supercollection methods', function() {

  beforeEach(function() {
    this.collection = new Collection();
    var Element = Backbone.Model.extend({});
    var el1 = new Element({name: 'html'});
    var el2 = new Element({name: 'head'});
    var el3 = new Element({name: 'body'});

    this.collection.push(el1);
    this.collection.push(el2);
    this.collection.push(el3);
  });

  it('should return the model which comes after given model', function() {
    expect((this.collection.next(this.collection.at(0))).toJSON()).to.eql((this.collection.at(1).toJSON()));
  });

  it('should return the model which comes before given model', function() {
    expect((this.collection.prev(this.collection.at(1))).toJSON()).to.eql((this.collection.at(0).toJSON()));
  });

  it('should return first model in collection when next on last element in collection', function() {
    expect((this.collection.next(this.collection.at(2))).toJSON()).to.eql((this.collection.at(0).toJSON()));
  });

  it('should return last model in collection when prev on first element in collection', function() {
    expect((this.collection.prev(this.collection.at(0))).toJSON()).to.eql((this.collection.at(2).toJSON()));
  });

});
