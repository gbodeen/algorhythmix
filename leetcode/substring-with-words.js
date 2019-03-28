/*
You are given a string, s, and a list of words, words, that are all 
of the same length. Find all starting indices of substring(s) in s 
that is a concatenation of each word in words exactly once and 
without any intervening characters.

Example 1:
Input:
  s = "barfoothefoobarman",
  words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.

Example 2:
Input:
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
Output: []
*/

var findSubstring = function (s, words) {
  let N = words.length, L = words[0] && words[0].length;
  let dict = {}, results = [];
  let slice;
  outerloop:
  for (let i = 0; i <= s.length - N * L; i++) {
    dict = {};
    for (let word of words) {
      dict[word] = (dict[word] || 0) + 1;
    }
    for (let j = 0; j < N; j++) {
      slice = s.slice(i + j * L, i + (j + 1) * L);
      if (dict[slice]) {
        dict[slice]--;
      } else {
        continue outerloop;
      }
    }
    results.push(i);
  }
  return results;
};
// time complexity: O(SN) for s length S and words length N
// space complexity: O(S+N) worst case if every char matches


// tests
console.log(findSubstring('', [''])); // [0]
console.log(findSubstring('', [])); // [0]
console.log(findSubstring('abc', [])); // [0]
console.log(findSubstring('', ['', '', ''])); // [0]
console.log(findSubstring('a', ['a'])); // [0]
console.log(findSubstring('a', ['a', 'a'])); // []
console.log(findSubstring('aaa', ['a', 'a'])); // [0, 1]
console.log(findSubstring('barfoothefoobarman', ['foo', 'bar'])); // [0, 9]
console.log(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])); // []
console.log(findSubstring('xxxxxx', ['xxx'])); // [0,1,2,3]
console.log(findSubstring('tweelstweeelstweeeelstweeeeels', ['twee', 'eels'])); // [2, 9, 13, 17]
console.log(findSubstring('aaa aab aac aba abb abc aca acb acc baa bab bac bba bbb bbc bca bcb bcc caa cab cac cba cbb cbc cca ccb ccc', ['a', 'b', 'c']));
// [20, 28, 44, 60, 76, 84] 
console.log(findSubstring('aaaaabaacabaabbabcacaacbaccbaababbacbbabbbbbcbcabcbbcccaacabcaccbacbbcbcccaccbccc', ['a', 'b', 'c']));
// [8, 15, 16, 21, 22, 23, 26, 33, 34, 45, 46, 47, 57, 58, 59, 63, 64, 65]
console.log(findSubstring('isituptoyouormeitistooitsuptomenoitisntmeitismeno', ['it', 'is', 'up', 'to', 'me'])); // []
console.log(findSubstring('isituptoyouormeitistooitsuptomenowyesitismetoupitisntmeitismeno', ['it', 'is', 'up', 'to', 'me'])); // [37]
console.log(findSubstring('punkiestscheesewizzspunkiest', ['spunkiest', 'cheesewiz'])); // []
console.log(findSubstring('punkiestscheesewizzoopnurglecheesewizspunkiestcheesewhiz', ['spunkiest', 'cheesewiz'])); // [28]