/*
Using names.txt, a 46K text file containing over five-thousand first names, 
begin by sorting it into alphabetical order. Then working out the alphabetical 
value for each name, multiply this value by its alphabetical position in the 
list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is 
worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would 
obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/

const fs = require('fs');

class PE022 {
  constructor() {
    this.names;
  }

  loadNames() {
    this.names = fs.readFileSync('./data_for_algos/p022_names.txt', 'utf8').replace(/"/g, '').split(',');
    return this.names;
  }

  alphaValue(word) {
    return word.split('').reduce(
      (sum, char) => sum + parseInt(char, 36) - 9,
      0);
  }

  totalOfNameScores() {
    const names = this.names;
    names.sort();
    let total = 0;
    for (let i = 0; i < names.length; i++) {
      total += (i + 1) * this.alphaValue(names[i]);
    }
    return total;
  }
}


// tests
const test = new PE022();
console.log(test.alphaValue('colin')); // 53
console.log(test.alphaValue('COLIN')); // 53
console.log(test.loadNames());
console.log(test.names);
console.log(test.totalOfNameScores()); // 871198282