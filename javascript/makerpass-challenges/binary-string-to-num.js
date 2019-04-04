/*
Given a number n (represented as a binary number string), convert n to base 10. 
Do NOT use parseInt(n, 2). You may use the parseInt function that takes in 
just one argument.
*/

function binaryToDecimal(n) {
  let sum = 0, p;
  for (let i = n.length - 1; i >= 0; i--) {
    p = n.length - i - 1;
    sum += n[i] * (2 ** p);
  }
  return sum;
}
// time complexity: O(N) for binary string of length N
// space complexity: O(1)

// tests
console.log(binaryToDecimal("10")); // 2
console.log(binaryToDecimal("11")); // 3
console.log(binaryToDecimal("0")); // 0
console.log(binaryToDecimal("1000")); // 8 
console.log(binaryToDecimal("11000110000")); // 1584
console.log(binaryToDecimal("100")); // 4
console.log(binaryToDecimal("1000111100")); // 572
console.log(binaryToDecimal("101")); // 5
console.log(binaryToDecimal("110")); // 6
console.log(binaryToDecimal("111")); // 7
console.log(binaryToDecimal("110101")); // 53
console.log(binaryToDecimal("10011001")); // 153
console.log(binaryToDecimal("101111")); // 47
console.log(binaryToDecimal("1111111")); // 127
console.log(binaryToDecimal("1")); // 1
console.log(binaryToDecimal("1100010")); // 98