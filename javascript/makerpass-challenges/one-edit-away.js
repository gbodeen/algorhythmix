/*
Write a function that takes in two strings and returns a boolean 
indicating if one string is one edit away from the other or not.
*/

function oneEditAway(str1, str2) {
  let edits = 0;
  for (let i = 0, j = 0; i < str1.length || j < str2.length; i++ , j++) {
    if (str1[i] === str2[j]) continue;
    edits++;
    // check for insertions:
    if (str1[i] === str2[j + 1]) j++;
    if (str1[i + 1] === str2[j]) i++;
  }
  return edits === 1;
}
// time complexity: linear
// space complexity: constant


// tests
console.log(oneEditAway('abcd', 'abecd'));
console.log(oneEditAway('bale', 'pale'));
console.log(oneEditAway('abcd', 'abc'));
console.log(oneEditAway('aaaa', 'aaaae'));
console.log(oneEditAway('pale', 'pales'));
console.log(!oneEditAway('bae', 'pale'));
console.log(!oneEditAway('apple', 'apopple'));