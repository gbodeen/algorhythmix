
/*
Find the value of d < 1000 for which 1/d contains the 
longest recurring cycle in its decimal fraction part.
*/

import java.util.Map;
import java.util.HashMap;

public class PE026 {
  public int decCycleLen(int n) {
    int remainder = 10; // decimal

    Map<Integer, Integer> prevs = new HashMap<>();

    for (int i = 1; i <= n; i++) {
      if (remainder == 0)
        return 0;
      if (prevs.containsKey(remainder)) {
        return i - prevs.get(remainder);
      }
      prevs.put(remainder, i);
      remainder = 10 * (remainder % n);
    }
    return -1;
  }

  public int maxCycleUnderN(int n) {
    int max = 0;
    int current;
    int maxIdx = -1;
    for (int i = 2; i < n; i++) {
      current = decCycleLen(i);
      if (current > max) {
        max = current;
        maxIdx = i;
      }
    }
    return maxIdx;
  }

  public static void main(String[] args) {
    PE026 test = new PE026();
    System.out.println(test.decCycleLen(3)); // 1
    System.out.println(test.decCycleLen(7)); // 6
    System.out.println(test.decCycleLen(16)); // 0
    System.out.println(test.decCycleLen(36)); // 1
    System.out.println(test.decCycleLen(38)); // 18
    System.out.println(test.decCycleLen(39)); // 6
    System.out.println(test.decCycleLen(44)); // 2
    System.out.println(test.maxCycleUnderN(1000)); // 983
  }
}