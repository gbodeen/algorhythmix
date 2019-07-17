/*
If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.

Not all numbers produce palindromes so quickly. For example,

349 + 943 = 1292,
1292 + 2921 = 4213
4213 + 3124 = 7337

That is, 349 took three iterations to arrive at a palindrome.

Although no one has proved it yet, it is thought that some numbers, like 
196, never produce a palindrome. A number that never forms a palindrome 
through the reverse and add process is called a Lychrel number. Due to 
the theoretical nature of these numbers, and for the purpose of this 
problem, we shall assume that a number is Lychrel until proven otherwise. 
In addition you are given that for every number below ten-thousand, it will 
either (i) become a palindrome in less than fifty iterations, or, (ii) no 
one, with all the computing power that exists, has managed so far to map it 
to a palindrome. In fact, 10677 is the first number to be shown to require 
over fifty iterations before producing a palindrome: 
4668731596684224866951378664 (53 iterations, 28-digits).

Surprisingly, there are palindromic numbers that are themselves Lychrel 
numbers; the first example is 4994.

How many Lychrel numbers are there below ten-thousand?
*/

class PE055 {
  isLychrel(n) {
    let next = n;
    for (let i = 0; i < 50; i++) {
      next = BigInt(next) + BigInt(this.reverse(next));
      if (this.isPalindrome(next)) {
        return false;
      }
    }
    return true;
  }

  countLychrels() {
    let count = 0;
    for (let i = 1; i < 10000; i++) {
      if (this.isLychrel(i)) {
        count++;
      }
    }
    return count;
  }

  reverse(n) {
    return n.toString().split('').reverse().join('');
  }

  isPalindrome(n) {
    return n.toString() === this.reverse(n);
  }

  static main() {
    const test = new PE055();
    console.log(test.isLychrel(47)); // false
    console.log(test.isLychrel(196)); // true
    console.log(test.isLychrel(349)); // false
    console.log(test.countLychrels()); // 249
  }
}


// test
PE055.main();