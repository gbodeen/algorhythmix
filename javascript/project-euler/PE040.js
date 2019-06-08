/*
An irrational decimal fraction is created by concatenating 
the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find 
the value of the following expression.

d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
*/

class PE040 {
  champernowne(n, i = 1) {
    let len = 0;
    while (len < n) {
      len += Math.floor(Math.log10(i++)) + 1;
    }
    let s = (--i).toString();
    let offset = (s.length - 1) - (len - n);
    return parseInt(s[offset]);
  }

  expression() {
    return this.champernowne(1) * this.champernowne(10) *
      this.champernowne(100) * this.champernowne(1000) *
      this.champernowne(10000) * this.champernowne(100000) *
      this.champernowne(1000000);
  }

  static main() {
    const test = new PE040();
    console.log(test.champernowne(1000));
    console.log(test.expression());
  }
}


// test
PE040.main();