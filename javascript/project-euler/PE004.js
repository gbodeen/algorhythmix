/*
A palindromic number reads the same both ways. The largest palindrome 
made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindrome(x) {
  if (typeof x !== 'string') {
    x = x.toString();
  }
  return x === x.split('').reverse().join('');
}

function PE004(start) {
  let max = 0;
  for (let i = start; i >= 0; i--) {
    for (let j = start; j >= i; j--) {
      if (i * j > max && isPalindrome(i * j)) {
        max = i * j;
      }
    }
  }
  return max;
}

console.log(PE004(99)); // 9009
console.log(PE004(999)); // 906609