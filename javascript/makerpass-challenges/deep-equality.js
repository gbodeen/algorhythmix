/*
Write a function that, given two objects, returns whether or not the two 
are deeply equivalent–meaning the structure of the two objects is the same, 
and so is the structure of each of their corresponding descendants.

DO NOT use JSON.stringify.
Notes: - top-level arguments are guaranteed to be non-array objects.
       - values will only be primitives, arrays, and objects -- no functions
*/

deepEquals = function (a, b) {
  // check for matching number of keys
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  // OK to use the keys from just one object
  for (let key in a) {
    // objects
    if (typeof a[key] === 'object') {
      if (typeof b[key] !== 'object') return false;
      // arrays specifically:
      if (Array.isArray(a[key]) && !Array.isArray(b[key])) return false;
      if (Array.isArray(b[key]) && !Array.isArray(a[key])) return false;
      // check deeper recursively
      if (!deepEquals(a[key], b[key])) return false;
    }
    // primitives
    else {
      if (a[key] !== b[key]) return false;
    }
  }
  // if all parts were equal, the whole is equal
  return true;
};
// time complexity: O(n) where there are n elements + subelements + subsubelements...
// space complexity: O(n) worst case due to Object.keys.  We can remove that, actually:

deepEquals = function (a, b) {
  // check for matching number of keys
  // BUT WITH O(1) SPACE COMPLEXITY
  for (let key in a) {
    if (!b.hasOwnProperty(key)) return false;
  }
  for (let key in b) {
    if (!a.hasOwnProperty(key)) return false;
  }

  // OK to use the keys from just one object
  for (let key in a) {
    // objects
    if (typeof a[key] === 'object') {
      if (typeof b[key] !== 'object') return false;
      // arrays specifically:
      if (Array.isArray(a[key]) && !Array.isArray(b[key])) return false;
      if (Array.isArray(b[key]) && !Array.isArray(a[key])) return false;
      // check deeper recursively
      if (!deepEquals(a[key], b[key])) return false;
    }
    // primitives
    else {
      if (a[key] !== b[key]) return false;
    }
  }
  // if all parts were equal, the whole is equal
  return true;
};


// tests
var should = chai.should();

describe('deepEquals()', function () {

  it('should return true for two empty objects', function () {
    deepEquals({}, {}).should.be.true;
  });
  it('distinguishes between objects and arrays', function () {
    var a = { foo: [2, { bar: {} }] }
    var b = { foo: [2, { bar: [] }] }
    deepEquals(a, b).should.be.false;
  });
  it('should use deep equality', function () {
    var a = { foo: 1 };
    var b = { foo: '1' };
    deepEquals(a, b).should.be.false;
  });
  it('should return true for two objects with the same keys and values', function () {
    var a = { foo: 'bar' };
    var b = { foo: 'bar' };
    deepEquals(a, b).should.be.true;
  });
  it('should return false for two objects with the same keys and but different values', function () {
    var a = { foo: 'bar' };
    var b = { foo: 'pow' };
    deepEquals(a, b).should.be.false;
  });
  it('should return false for two objects with different number of keys', function () {
    var a = { foo: 'bar' };
    var b = { foo: 'bar', biz: 'baz' };
    deepEquals(a, b).should.be.false;
  });
  it('should return false for two objects with different number of keys', function () {
    var a = { foo: 'bar', biz: 'baz' };
    var b = { foo: 'bar' };
    deepEquals(a, b).should.be.false;
  });
  it('should return true for similar nested object properties', function () {
    var a = { foo: 1, b: { c: 3 } };
    var b = { foo: 1, b: { c: 3 } };
    deepEquals(a, b).should.be.true;
  });
  it('should return false for dissimilar nested object properties', function () {
    var a = { foo: 1, b: { c: 3 } };
    var b = { foo: 1, b: { c: 'potato' } };
    deepEquals(a, b).should.be.false;
  });
  it('should return false for dissimilar nested object properties', function () {
    var a = { foo: 1, b: { c: 'potato' } };
    var b = { foo: 1, b: { c: 3 } };
    deepEquals(a, b).should.be.false;
  });
  it('should return true for similar excessively nested object properties', function () {
    var a = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    deepEquals(a, b).should.be.true;
  });
  it('should return true for similar excessively nested object properties', function () {
    var a = { b: { c: { d: { e: 'potato' } } }, foo: 1 };
    var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    deepEquals(a, b).should.be.true;
  });
});