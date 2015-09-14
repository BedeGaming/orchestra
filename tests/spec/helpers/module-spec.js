'use strict';

require('../../app/support/setup');
var moduleHelper = require('../../../src/helpers/module');

describe('Module Helpers', function() {

  describe('checkRequiredParams', function() {

    it('should expose the checkRequiredParams function', function() {
      expect(moduleHelper.checkRequiredParams).to.be.a('function');
    });

    it('should throw an error if params are not present', function() {
      var config = {};
      try {
        moduleHelper.checkRequiredParams(config, ['id'], 'modulename');
      } catch (err) {
        expect('orchestra:modulename required param id is undefined or null').to.eql(err.message);
      }
    });

    it('should not throw error if params present', function() {
      var config = {main: true};
      try {
        expect(moduleHelper.checkRequiredParams(config, ['main'], 'modulename')).to.be(undefined);
      } catch (e) {
        expect(true).to.be(false);
      }
    });

  });

});
