/*
Write a function that takes a number as its argument and returns 
a string that represents that number’s simplified fraction. Whole 
numbers and mixed fractions should be returned as improper fractions.
*/

function fractionConverter(number) {
  let denom = 1;
  while (number % 1) {
    number *= 10;
    denom *= 10;
  }
  let divisor = gcd(number, denom);
  return (number / divisor) + '/' + (denom / divisor);
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

// time complexity: O(D+G) where D is the number of digits after the decimal and G is worst case O(n)
// space complexity: O(1)


// tests
console.log(fractionConverter(1)); // '1/1'
console.log(fractionConverter(88)); // '22/25'
console.log(fractionConverter(-175)); // '-7/4'
console.log(fractionConverter(0)); // '0/1'
console.log(fractionConverter(175)); // '7/4'
console.log(fractionConverter(3)); // '3/1'
console.log(fractionConverter(-1)); // '-1/1'
console.log(fractionConverter(25)); // '5/2'
console.log(fractionConverter(5)); // '1/2'
console.log(fractionConverter(25)); // '1/4'
console.log(fractionConverter(82)); // '82/1'
console.log(fractionConverter(275)); // '11/4'
