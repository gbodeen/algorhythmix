/*
Given two non-negative integers num1 and num2 represented as strings, 
return the product of num1 and num2, also represented as a string.
*/

const multiply = function (num1, num2) {
  let prod, partialProd, sum, partialSum, digit, carry, result = ''
  // start at 1s col and move left taking partial products
  for (let i = num1.length - 1; i >= 0; i--) {
    // pad with 1 zero for 10s col, 2 zeros for 100s col, etc.
    partialProd = '0'.repeat(num1.length - 1 - i);
    carry = 0;
    for (let j = num2.length - 1; j >= 0; j--) {
      prod = parseInt(num1[i]) * parseInt(num2[j]);
      digit = (prod + carry) % 10;
      carry = (prod + carry - digit) / 10;
      // concatenate digits so far
      partialProd = digit + partialProd;
    }
    if (carry) partialProd = carry + partialProd;

    partialSum = '';
    carry = 0;;
    let L1 = partialProd.length, L2 = result.length;
    for (let k = 0; k < Math.max(L1, L2); k++) {
      // iterate from the 1s digit of each up to the highest digit of either
      sum = (parseInt(partialProd[L1 - 1 - k]) || 0) + (parseInt(result[L2 - 1 - k]) || 0);
      digit = (sum + carry) % 10;
      carry = (sum + carry - digit) / 10;
      // concatenate digits so far
      partialSum = digit + partialSum;
    }
    if (carry) partialSum = carry + partialSum;
    result = partialSum;
  }
  // trim leading zeros
  while (result[0] === '0' && result.length > 1) {
    result = result.slice(1);
  }
  return result;
};
// time complexity: O(log(N)*log(M)) for numbers N and M
// space complexity: O(log(N)+log(M))

// tests
console.log(multiply('0', '0')); // 0
console.log(multiply('1', '0')); // 0
console.log(multiply('0', '2')); // 0
console.log(multiply('54321', '0')); // 0 - not 00000
console.log(multiply('0', '6789')); // 0 - not 00000
console.log(multiply('2', '3')); // 6
console.log(multiply('4', '1')); // 4
console.log(multiply('7', '6')); // 42
console.log(multiply('2', '5')); // 10 - trailing 0
console.log(multiply('20', '50')); // 1000 - trailing 0s
console.log(multiply('7', '2345')); // 16415
console.log(multiply('3456789', '8')); // 27654312 - trailing 0s
console.log(multiply('111111', '111111')); // 12345654321
console.log(multiply('999999', '999999')); // 999998000001
console.log(multiply('9007199254740991', '9007199254740991000')); // 81129638414606663681390495662081000 - over MAX_SAFE_INTEGER
