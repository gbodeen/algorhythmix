/*
The nth term of the sequence of triangle numbers is given by, 
tn = ½n(n+1); so the first ten triangle numbers are:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding 
to its alphabetical position and adding these values we form 
a word value. For example, the word value for SKY is 19 + 11 
+ 25 = 55 = t10. If the word value is a triangle number then 
we shall call the word a triangle word.

Using words.txt, a 16K text file containing nearly 
two-thousand common English words, how many are triangle words?
*/


const fs = require('fs');


class PE042 {
  loadWords() {
    this.words = fs.readFileSync('./data_for_algos/p042_words.txt', 'utf8')
      .replace(/"/g, '')
      .split(',');
    return this.words;
  }

  isTriangularWord(w) {
    const sum = w.split('').reduce((sum, c) => sum + c.charCodeAt(0) - 64, 0);
    return Math.sqrt(1 + 8 * sum) % 2 === 1;
  }

  countTriangularWords() {
    if (!this.words) {
      this.loadWords();
    }
    let count = 0;
    for (let word of this.words) {
      if (this.isTriangularWord(word)) count++;
    }
    return count;
  }

  static main() {
    const test = new PE042();
    // test.loadWords();
    // console.log(test.words); //
    console.log(test.isTriangularWord('A')); // true
    console.log(test.isTriangularWord('B')); // false
    console.log(test.isTriangularWord('C')); // true
    console.log(test.isTriangularWord('SKY')); // true
    console.log(test.isTriangularWord('SKZ')); // false
    console.log(test.countTriangularWords()); // 162
  }
}


// test
PE042.main();