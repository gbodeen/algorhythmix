
/*
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence 
to contain 1000 digits?
*/

import java.math.BigInteger;

public class PE025 {

  private BigInteger a = BigInteger.valueOf(1);
  private BigInteger b = BigInteger.valueOf(0);
  private BigInteger c = BigInteger.valueOf(0);

  public BigInteger nextFibonacci() {
    c = a;
    a = b;
    b = b.add(c);
    return b;
  }

  public int countDigits(BigInteger n) {
    return n.toString().length();
  }

  public int firstToNDigits(int n) {
    a = BigInteger.valueOf(1);
    b = BigInteger.valueOf(0);
    c = BigInteger.valueOf(0);
    int i = 1;
    while (true) {
      if (countDigits(nextFibonacci()) >= n) {
        return i;
      }
      i++;
    }
  }

  public static void main(String[] args) {
    PE025 test = new PE025();
    // for (int i = 0; i < 16; i++) {
    // System.out.println(test.nextFibonacci().toString());
    // }
    // System.out.println(test.countDigits(BigInteger.valueOf(1000))); // 4
    System.out.println(test.firstToNDigits(3)); // 12
    System.out.println(test.firstToNDigits(1000)); // 4782
  }
}