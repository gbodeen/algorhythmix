
/*
We shall say that an n-digit number is pandigital if it 
makes use of all the digits 1 to n exactly once; for 
example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, 
containing multiplicand, multiplier, and product is 1 through 
9 pandigital.

Find the sum of all products whose multiplicand/multiplier/
product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so 
be sure to only include it once in your sum.
*/

import java.util.Set;
import java.util.HashSet;
import java.math.BigInteger;

public class PE032 {
  public boolean isPandigital(int a, int b, int c) {
    String word = Integer.toString(a) + Integer.toString(b) + Integer.toString(c);
    if (word.length() != 9)
      return false;
    for (int i = 1; i <= 9; i++) {
      if (!word.contains(Integer.toString(i)))
        return false;
    }
    return true;
  }

  public boolean isPartialPandigital(int n) {
    String s = Integer.toString(n);
    Set sset = new HashSet<Character>();
    if (s.contains("0"))
      return false;
    for (int i = 0; i < s.length(); i++) {
      if (sset.contains(s.charAt(i)))
        return false;
      sset.add(s.charAt(i));
    }
    return true;
  }

  public int findPandigitals() {
    int aMax = 9876;
    Set results = new HashSet<Integer>();
    int aDigits, product, bMin, bMax;
    int sum = 0;
    for (int a = 1; a <= aMax; a++) {
      if (!isPartialPandigital(a)) {
        continue;
      }
      aDigits = (int) Math.log10(a) + 1;
      bMin = (int) Math.pow(10, Math.floor((9 - aDigits) / 2.0) - 1);
      bMax = (int) Math.pow(10, Math.ceil((9 - aDigits) / 2.0));
      for (int b = bMin; b < bMax; b++) {
        product = a * b;
        if (product > aMax || product > bMax) {
          break;
        }
        if (!results.contains(product) && isPandigital(a, b, product)) {
          results.add(product);
          sum += product;
        }
      }
    }
    return sum;
  }

  public static void main(String[] args) {
    PE032 test = new PE032();
    System.out.println(test.isPandigital(39, 186, 7254)); // true
    System.out.println(test.isPandigital(1, 2, 3456783)); // false
    System.out.println(test.isPartialPandigital(12)); // true
    System.out.println(test.isPartialPandigital(18)); // true
    System.out.println(test.isPartialPandigital(9876)); // true
    System.out.println(test.isPartialPandigital(445)); // false
    System.out.println(test.findPandigitals()); // 45228
  }
}
