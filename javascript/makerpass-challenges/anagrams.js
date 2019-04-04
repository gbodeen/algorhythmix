/*
Given two strings, return true if one string is an anagram of another.
*/

function isAnagram(a, b) {
  let dict = {};
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== ' ') {
      dict[a[i]] = (dict[a[i]] || 0) + 1;
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (b[i] !== ' ') {
      dict[b[i]] = (dict[b[i]] || 0) - 1;
    }
  }
  for (let key in dict) {
    if (dict[key] !== 0) return false;
  }
  return true;
}
// time complexity: O(n) for strings both of length n
// space complexity: O(n) worst case


// // This was my first attempt. It's clean but has worse complexity.
// function isAnagram (a, b) {
//   a = sortLetters(cutWhitespace(a));
//   b = sortLetters(cutWhitespace(b));
//   return a === b;
// }
//
// function sortLetters(word) {
//   return word.split('').sort().join('');
// }
//
// function cutWhitespace(word) {
//   return word.replace(/\s/g,'');
// }
// 
// time complexity: O(n*log(n)) for strings both of length n
// space complexity: O(n)

// tests
console.log(isAnagram("why?", "why not?")); // false
console.log(isAnagram("replays", "relaspe")); // false
console.log(isAnagram("deductions", "udcisidton")); // false
console.log(isAnagram("listen", "elitsn")); // true
console.log(isAnagram("angered", "n8drgaee")); // false
console.log(isAnagram("serbia", "arsbie")); // true
console.log(isAnagram("gainly", "yangil")); // true
console.log(isAnagram("orchestra", "ocsahrtar")); // false
console.log(isAnagram("admirer", "eri6rdma"));  // false
console.log(isAnagram("resistance", "sanescrtei")); // true
console.log(isAnagram("protectional", "aelrpoatnict")); // false
console.log(isAnagram("creative", "vecetrai")); // true
console.log(isAnagram("silent", "listen")); // true
console.log(isAnagram("crudities", "cdieutsri")); // true
console.log(isAnagram("torchwood", "doctor who")); // true - don't count spaces
console.log(isAnagram("paternal", "reap7antl")); // false
console.log(isAnagram("sadder", "adders")); // true
console.log(isAnagram("discriminator", "atnrrmdiicius")); // false

