

function filterPalindromes(words) {
  return words.filter(word => {
    word = word.split(' ').join('').toLowerCase();
    return word === word.split('').reverse().join('');
  })
}
// time complexity: O(L) for L letters in all the words
// space complexity: O(L) also as .filter makes a new array

// the space complexity can be reduced to O(1) by mutating the original array
function filterPalindromes(words) {
  let i = 0, word;
  while (i < words.length) {
    word = words[i].split(' ').join('').toLowerCase();
    if (word !== word.split('').reverse().join('')) {
      words.splice(i, 1);
    } else {
      i++;
    }
  }
  return words;
}


// tests
console.log(filterPalindromes(['hi', 'hello', 'bye'])); // []
console.log(filterPalindromes(['word', 'Ana', 'race car'])); // ['Ana', 'race car']
console.log(filterPalindromes(['level', 'Jeremy', 'llama mall'])); // ['level', 'llama mall']