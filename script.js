//re-implement: Push, Pop, Shift, and Unshift for Array.prototype,
//without using any library functions. Also add some Mocha
//tests to verify correctness.

'use strict';

//arrays
var arrayOne = [1, 2, 2, 3, 4, 4, 5, 6];
var arrayTwo = [1, 2, 2, 3, 4, 4, 5, 6];
var arrayThree = ['one', 'two', 'three', 'four', 'five', 'six',
'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eigtheen', 'nineteen',
'twenty'];
exports.Array = Array;
exports.arrayOne = arrayOne;
exports.arrayTwo = arrayTwo;
exports.arrayThree = arrayThree;

//push
Array.prototype.myPush = function(e) {
  this[this.length] = e;
  return this.length;
};

//pop
Array.prototype.myPop = function() {
  var del = this[this.length - 1];
  delete this[this.length - 1];
  this.length = this.length -1;
  return del;
};

//unshift
Array.prototype.myUnshift = function(e) {
  for (var i = this.length; i >= 1; i--) {
    this[i] = this[i - 1];
  }
  this[0] = e;
  return this.length;
};

//shift
Array.prototype.myShift = function() {
  var res = this[0];
  for (var i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  delete this[this.length - 1];
  this.length = this.length -1;
  return res;
};

//unique
//implement a function called unique. It takes an array
//and returns a copy of the array with all the duplicates
//removed.

exports.unique = function(arr) {
  var hash = {};
  var uniqueArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (!hash.hasOwnProperty(arr[i])) {
      hash[arr[i]] = true;
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
};

//frequency
//given an array of english words, figure out
//what the most common letter (anywhere in a word) is.

exports.frequency2 = function(myArr) {
  var hash = {};

  for (var i = 0; i < myArr.length; i++) {
    var word = myArr[i];
    for (var j = 0; j < word.length; j++) {
      var letter = word[j].toLowerCase();
      if (!hash[letter]) {
        hash[letter] = 1;
      } else {
        hash[letter] += 1;
      }
    }
  }

  var score = 0;
  var newArr = [];
  for (var key in hash) {
    if (hash[key] >= score) {
      score = hash[key];
    }
  }
  for (var k in hash) {
    if (hash[k] === score) {
      newArr.push(k);
    }
  }
  return newArr;
};

exports.Array = Array;
exports.arrayOne = arrayOne;
exports.arrayTwo = arrayTwo;
exports.arrayThree = arrayThree;
