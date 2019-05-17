/*
If the numbers 1 to 5 are written out in words: one, two, three, 
four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used 
in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were 
written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three 
hundred and forty-two) contains 23 letters and 115 (one hundred 
and fifteen) contains 20 letters. The use of "and" when writing 
out numbers is in compliance with British usage.
*/

class PE017 {
  countLetters(s) {
    return s.replace(/[\s-]/g, '').length;
  }

  numToWords(n) { // range of n is 1 to 1000
    if (n === 1000) return 'one thousand';

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let name = '';
    if (n >= 100) {
      name += ones[Math.floor(n / 100)] + ' hundred';
      if (n % 100) {
        name += ' and ';
      }
    }
    if (n % 100 >= 10 && n % 100 < 20) {
      name += teens[(n % 100) - 10];
      return name;
    }
    if (n % 100 >= 20) {
      name += tens[Math.floor((n % 100) / 10)];
      if (n % 10) {
        name += '-';
      }
    }
    name += ones[n % 10];
    return name;
  }

  main() {
    let count = 0;
    for (let i = 1; i <= 1000; i++) {
      count += this.countLetters(this.numToWords(i));
    }
    return count;
  }
}


// tests
const test = new PE017();
console.log(test.numToWords(1));
console.log(test.numToWords(2));
console.log(test.numToWords(3));
console.log(test.numToWords(9));
console.log(test.numToWords(10));
console.log(test.numToWords(11));
console.log(test.numToWords(12));
console.log(test.numToWords(19));
console.log(test.numToWords(20));
console.log(test.numToWords(21));
console.log(test.numToWords(30));
console.log(test.numToWords(99));
console.log(test.numToWords(100));
console.log(test.numToWords(101));
console.log(test.numToWords(102));
console.log(test.numToWords(110));
console.log(test.numToWords(111));
console.log(test.numToWords(119));
console.log(test.numToWords(129));
console.log(test.numToWords(130));
console.log(test.numToWords(167));
console.log(test.numToWords(234));
console.log(test.numToWords(789));
console.log(test.numToWords(999));
console.log(test.numToWords(1000));

console.log(test.countLetters(test.numToWords(342))); // 23
console.log(test.countLetters(test.numToWords(115))); // 20

console.log(test.main()); // 21124