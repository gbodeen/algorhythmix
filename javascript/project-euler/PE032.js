/*
We shall say that an n-digit number is pandigital if it 
makes use of all the digits 1 to n exactly once; for 
example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, 
containing multiplicand, multiplier, and product is 1 through 
9 pandigital.

Find the sum of all products whose multiplicand/multiplier/
product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so 
be sure to only include it once in your sum.
*/


class PE032 {
  isPandigital(a, b, c) {
    const word = ([a, b, c]).join('');
    if (word.length !== 9) return false;
    for (let i = 1; i <= 9; i++) {
      if (!word.includes(i)) return false;
    }
    return true;
  }

  isPartialPandigital(n) {
    const s = n.toString();
    if (s.includes(0)) return false;
    return s.length === (new Set(s)).size;
  }

  findPandigitals() {
    const aMax = 9876;
    const results = new Set();
    let product, sum = 0;
    let aDigits, bMin, bMax;
    for (let a = 1; a <= aMax; a++) {
      if (!this.isPartialPandigital(a)) {
        continue;
      }
      aDigits = Math.floor(Math.log10(a)) + 1;
      bMin = 10 ** (Math.floor((9 - aDigits) / 2) - 1);
      bMax = 10 ** (Math.ceil((9 - aDigits) / 2));
      if (a === 12) {
        return [aDigits, bMin, bMax];
      }
      for (let b = bMin; b < bMax; b++) {
        product = a * b;
        if (product > aMax || product > bMax) {
          break;
        }
        if (!results.has(product) && this.isPandigital(a, b, product)) {
          results.add(product);
          sum += product;
        }
      }
    }
    return sum;
  }

  static main() {
    const test = new PE032();
    console.log(test.isPandigital(39, 186, 7254)); // true
    console.log(test.isPandigital(1, 2, 3456783)); // false
    console.log(test.isPartialPandigital(9876)); // true
    console.log(test.isPartialPandigital(445)); // false
    console.log(test.findPandigitals()); // 45228
  }
}



// test
PE032.main();
console.log(10 ** (Math.floor((9 - 2) / 2) - 1))
console.log(Math.floor((9 - 2) / 2) - 1)
console.log(10 ** (Math.ceil((9 - 2) / 2)))
console.log(Math.ceil((9 - 2) / 2))
console.log((9 - 2) / 2)