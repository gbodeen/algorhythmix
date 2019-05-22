/*
A permutation is an ordered arrangement of objects. For example, 
3124 is one possible permutation of the digits 1, 2, 3 and 4. If 
all of the permutations are listed numerically or alphabetically, 
we call it lexicographic order. The lexicographic permutations of 
0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 
1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

class PE024 {
  factorial(n) {
    let prod = 1;
    for (let i = 2; i <= n; i++) {
      prod *= i;
    }
    return prod;
  }

  digitPermute(n) {
    let permute = '';
    const vals = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
    placeLoop:
    for (let place = 9; place >= 0; place--) {
      digitLoop:
      for (let digit = 9; digit >= 0; digit--) {
        if (!vals.hasOwnProperty(digit)) {
          continue digitLoop;
        }
        if (vals[digit] * this.factorial(place) < n) {
          n -= vals[digit] * this.factorial(place);
          permute += digit;
          delete vals[digit];
          for (let i = digit + 1; i < 10; i++) {
            vals[i]--;
          }
          continue placeLoop;
        }
      }
    }
    return permute;
  }
}


// tests
const test = new PE024();
console.log(test.factorial(0));
console.log(test.digitPermute(1)); // 0123456789
console.log(test.digitPermute(2)); // 0123456798
console.log(test.digitPermute(3)); // 0123456798
console.log(test.digitPermute(4)); // 0123456798
console.log(test.digitPermute(5)); // 0123456798
console.log(test.digitPermute(6)); // 0123456798
console.log(test.digitPermute(7)); // 0123456798
console.log(test.digitPermute(1000000)); // 2783915460