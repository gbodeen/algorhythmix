/*
An irrational decimal fraction is created by concatenating 
the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find 
the value of the following expression.

d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
*/

public class PE040 {
  public int champernowne(int n) {
    int len = 0;
    int i = 1;
    while (len < n) {
      len += Math.floor(Math.log10(i++)) + 1;
    }
    String s = Integer.toString(--i);
    int offset = (s.length() - 1) - (len - n);
    return Character.getNumericValue(s.charAt(offset));
  }

  public int expression() {
    return this.champernowne(1) * this.champernowne(10) * this.champernowne(100) * this.champernowne(1000)
        * this.champernowne(10000) * this.champernowne(100000) * this.champernowne(1000000);
  }

  public static void main(String[] args) {
    PE040 test = new PE040();
    System.out.println(test.champernowne(1000)); // 3
    System.out.println(test.expression()); // 210
  }
}