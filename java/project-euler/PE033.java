
/*
The fraction 49/98 is a curious fraction, as an inexperienced 
mathematician in attempting to simplify it may incorrectly 
believe that 49/98 = 4/8, which is correct, is obtained by 
cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial 
examples.

There are exactly four non-trivial examples of this type of 
fraction, less than one in value, and containing two digits 
in the numerator and denominator.

If the product of these four fractions is given in its lowest 
common terms, find the value of the denominator.
*/

import java.util.Set;
import java.util.HashSet;

public class PE033 {
  public Set<String> findCuriousFractions() {
    Set<String> results = new HashSet<String>();
    for (int n = 10; n <= 99; n++) {
      for (int d = 10; d <= 99; d++) {
        if (n >= d)
          continue;
        if (digitsCancel(n, d)) {
          results.add(Integer.toString(n) + '/' + Integer.toString(d));
        }
      }
    }
    return results;
  }

  public boolean digitsCancel(int n, int d) {
    String ns = Integer.toString(n);
    String ds = Integer.toString(d);
    int ni, di;
    for (int i = 1; i <= 9; i++) {
      String si = Integer.toString(i);
      char sic = si.charAt(0);
      if (ns.contains(si) && ds.contains(si)) {
        ni = Character.getNumericValue(ns.charAt(0) == sic ? ns.charAt(1) : ns.charAt(0));
        di = Character.getNumericValue(ds.charAt(0) == sic ? ds.charAt(1) : ds.charAt(0));
        if (ni * d == n * di)
          return true;
      }
    }
    return false;
  }

  public float solution() {
    Set<String> fracs = findCuriousFractions();
    float prod = 1;
    for (String frac : fracs) {
      prod *= Float.valueOf(frac.substring(0, 2)) / Float.valueOf(frac.substring(3, 5));
    }
    return Math.round(1 / prod);
  }

  public static void main(String[] args) {
    PE033 test = new PE033();
    System.out.println(test.digitsCancel(49, 98)); // true
    System.out.println(test.digitsCancel(30, 50)); // false
    System.out.println(test.digitsCancel(32, 64)); // false
    System.out.println(test.digitsCancel(36, 63)); // false
    System.out.println(test.findCuriousFractions()); //
    System.out.println(test.solution()); // 100
  }
}
