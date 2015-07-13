'use strict';

var script = require('../script.js');
var expect = require('chai').expect;

describe('myPush', function() {
  it('will push "foo" to the array when passed "foo"', function() {
    expect(script.arrayOne.myPush('foo')).to.equal(script.arrayTwo.push('foo'));
  });
});

describe('myUnshit', function() {
  it('will unshift "foo" to the beginning of an array when passed "foo"', function() {
    expect(script.arrayOne.myUnshift('foo')).to.equal(script.arrayTwo.unshift('foo'));
  });
});

describe('myPop', function() {
  it('will remove (pop) the last element of the array', function() {
    expect(script.arrayOne.myPop()).to.equal(script.arrayTwo.pop());
  });
});

describe('myShift', function() {
  it('will shift the first element of the array', function() {
    expect(script.arrayOne.myShift()).to.equal(script.arrayTwo.shift());
  });
});

describe('unique', function() {
  it('will remove duplicates in the array', function() {
    expect(script.unique(script.arrayOne)).to.eql([1, 2, 3, 4, 5, 6]);
  });
});

describe('frequency2', function() {
  it('will return the most common letter in an array', function() {
    expect(script.frequency2(script.arrayThree)).to.eql(['e']);
  });
});

