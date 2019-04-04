/*
Given a non-empty string s, you may delete at most 
one character. Judge whether you can make it a palindrome.
*/

var validPalindrome = function (s) {
  let left = 0, right = s.length - 1;

  function innerRecurse(s, left, right, charDeleted = false) {
    while (left < right) {
      if (/\W/.test(s[left])) {
        left++;
      } else if (/\W/.test(s[right])) {
        right--;
      } else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        if (charDeleted) {
          return false;
        } else {
          return innerRecurse(s, left + 1, right, true) || innerRecurse(s, left, right - 1, true);
        }
      } else {
        left++;
        right--;
      }
    }
    return true;
  }

  return innerRecurse(s, left, right, false);
};
// time complexity: O(n)
// space complexity: O(1)



// tests
console.log(validPalindrome(''));
console.log(validPalindrome('x'));
console.log(validPalindrome('hh'));
console.log(validPalindrome('fbBF'));
console.log(validPalindrome('My word, Dr. Owym!'));
console.log(validPalindrome('xy'));
console.log(validPalindrome('hht'));
console.log(validPalindrome('thh'));
console.log(validPalindrome('hht'));
console.log(validPalindrome('hhth'));
console.log(validPalindrome('A Panamanian mant amnainamanapa'));
console.log(!validPalindrome('xyz'));
console.log(!validPalindrome('thhr'));
console.log(!validPalindrome('A Panamanian manta amnainamanapa'));