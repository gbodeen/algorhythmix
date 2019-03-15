/*
Given a string, determine if it is a palindrome, considering 
only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string 
as valid palindrome.
*/



var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/\W/g, '');
  return s === s.split('').reverse().join('');
};
// time complexity: O(n) - the regex is simple enough
// space complexity: O(n) also due to the split

var isPalindrome = function (s) {
  let left = 0; right = s.length - 1;
  while (left < right) {
    if (/\W/.test(s[left])) {
      left++;
    } else if (/\W/.test(s[right])) {
      right--;
    } else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};
// time complexity: O(n)
// space complexity: O(1);
// but benchmarks as slower and as using more memory. :-\


// tests
console.log(isPalindrome(''));
console.log(isPalindrome('x'));
console.log(isPalindrome('hh'));
console.log(isPalindrome('fbBF'));
console.log(isPalindrome('My word, Dr. Owym!'));
console.log(!isPalindrome('xy'));
console.log(!isPalindrome('hht'));
console.log(!isPalindrome('thh'));
console.log(!isPalindrome('A Panamanian mant amnainamanapa'));