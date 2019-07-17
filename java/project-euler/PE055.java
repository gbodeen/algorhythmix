
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

import java.math.BigInteger;

public class PE055 {
  public boolean isLychrel(int n) {
    BigInteger next = BigInteger.valueOf(n);
    for (int i = 0; i < 50; i++) {
      BigInteger temp = new BigInteger(this.reverse(next));
      next = next.add(temp);
      if (this.isPalindrome(next)) {
        return false;
      }
    }
    return true;
  }

  public int countLychrels() {
    int count = 0;
    for (int i = 1; i < 10000; i++) {
      if (this.isLychrel(i)) {
        count++;
      }
    }
    return count;
  }

  public String reverse(BigInteger n) {
    char[] cn = n.toString().toCharArray();
    char[] rcn = new char[cn.length];
    for (int i = 0; i < cn.length; i++) {
      rcn[i] = cn[cn.length - 1 - i];
    }
    String rsn = new String(rcn);
    return rsn;
  }

  public boolean isPalindrome(BigInteger n) {
    return n.toString().equals(this.reverse(n));
  }

  public static void main(String[] args) {
    PE055 test = new PE055();
    System.out.println(test.isLychrel(47)); // false
    System.out.println(test.isLychrel(196)); // true
    System.out.println(test.isLychrel(349)); // false
    System.out.println(test.countLychrels()); // 249
  }
}
