/*
Build a function that converts a hexadecimal number to a base 10 number. 
Do not use toString or parseInt.
*/

// It didn't say not to use Number
function hexToDec(hex) {
  return hex.split('').reverse()
    .map(x => Number('0x' + x))
    .reduce((dec, n, i) => {
      return dec + n * (16 ** i);
    });
}
// time complexity: linear
// space complexity: linear also due to the split, map, & reverse

// But in the spirit of the problem, here's not using Number, either.
// Also only space complexity O(1).
function hexToDec(hex) {
  let dec = 0, L = hex.length
  for (let i = L - 1; i >= 0; i--) {
    pow = 16 ** (L - 1 - i);
    dec += digits[hex[i]] * pow;
  }
  return dec;
}

const digits = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'a': 10,
  'b': 11,
  'c': 12,
  'd': 13,
  'e': 14,
  'f': 15
}


// tests
console.log(hexToDec('f00') === 3840);
console.log(hexToDec('10') === 16);
console.log(hexToDec('0') === 0);
console.log(hexToDec('aa') === 170);
console.log(hexToDec('2329') === 9001);
console.log(hexToDec('f0') === 240);
console.log(hexToDec('ff') === 255);