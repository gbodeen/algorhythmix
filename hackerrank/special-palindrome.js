/*
"Special" palindromes for this problem come in two types.  They are
either (1) all the same letter, or (2) all the same letter except for
one different letter at the middle position.

Given a string, count the number of special palindromes that occur in
it at unique start/end positions.
*/

// function countSpecialPals(s) {
//   let count = 0, current = 0;
//   // type 1 first:
//   for (let i = 0; i <= s.length; i++) {
//     if (s[i] === s[i - 1]) {
//       current++;
//     } else {
//       count += current * (current + 1) / 2;
//       current = 1;
//     }
//   }
//   // type 2 next:
//   let a, b;
//   for (let i = 1; i < s.length - 1; i++) {
//     a = s[i];
//     b = s[i - 1];
//     for (let j = 1; i - j >= 0 && i + j < s.length; j++) {
//       if (a === b || s[i - j] !== s[i + j] || s[i - j] !== b) break;
//       count++;
//     }
//   }
//   return count;
// }
// time complexity: type1 section is O(n), type2 is not as easy to reason about,
//  but seems still basically linear even worst case
// space complexity: O(1)

function countSpecialPals(s) {
  let count = 0, current = 0;
  // type 1 first:
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
      current++;
    } else {
      count += current * (current + 1) / 2;
      current = 1;
    }
  }
  // type 2 next:
  let a, b;
  for (let i = 1; i < s.length - 1; i++) {
    a = s[i];
    b = s[i - 1];
    for (let j = 1; i - j >= 0 && i + j < s.length; j++) {
      if (a === b || s[i - j] !== s[i + j] || s[i - j] !== b) break;
      count++;
    }
  }
  return count;
}

// tests
console.log(countSpecialPals('a')); // 1
console.log(countSpecialPals('aa')); // 3
console.log(countSpecialPals('aaa')); // 6
console.log(countSpecialPals('aaaa')); // 10
console.log(countSpecialPals('aabbb')); // 9
console.log(countSpecialPals('ababa')); // 8
console.log(countSpecialPals('abcd')); // 4
console.log(countSpecialPals('abbcbba')); // 11
