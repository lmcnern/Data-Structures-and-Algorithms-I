'use strict';

var script = require('../script');
var expect = require('chai');

describe('myPush', function() {
  it('will push "foo" to the array when passed "foo"', function() {
      expect(script.arrayOne.myPush('foo')).to.equal(script.arrayTwo.push('hotdog'));
  });
});

describe('myUnshit', function() {
  it('will unshift "foo" to the beginning of an array when passed "foo"', function() {
  expect(script.arrayOne.myUnshift('foo')).to.equal(script.arrayTwo.unshift('foo'));
  });
});

