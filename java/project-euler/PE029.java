
/*
Consider all integer combinations of a^b for 
2 ≤ a ≤ 5 and 2 ≤ b ≤ 5:

22=4, 23=8, 24=16, 25=32
32=9, 33=27, 34=81, 35=243
42=16, 43=64, 44=256, 45=1024
52=25, 53=125, 54=625, 55=3125
If they are then placed in numerical order, with 
any repeats removed, we get the following sequence 
of 15 distinct terms:

4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 
625, 1024, 3125

How many distinct terms are in the sequence generated 
by a^b for 2 ≤ a ≤ 100 and 2 ≤ b ≤ 100?
*/

import java.math.BigInteger;
import java.util.Set;
import java.util.HashSet;

public class PE029 {
  public Set<BigInteger> powerCombos(int limit) {
    Set combos = new HashSet<BigInteger>();
    for (int a = 2; a <= limit; a++) {
      for (int b = 2; b <= limit; b++) {
        combos.add(BigInteger.valueOf(a).pow(b));
      }
    }
    return combos;
  }

  public static void main(String[] args) {

    PE029 test = new PE029();
    System.out.println(test.powerCombos(5));
    System.out.println(test.powerCombos(5).size()); // 15
    System.out.println(test.powerCombos(100).size()); // 9183
  }
}
