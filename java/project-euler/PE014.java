
/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 
10 terms. Although it has not been proved yet (Collatz Problem), it is thought 
that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

import java.util.Map;
import java.util.HashMap;

public class PE014 {
  public long collatz(long n) {
    return (n % 2 == 0) ? (n / 2) : (3 * n + 1);
  }

  // public Map<Integer, Integer> memos = new HashMap<Integer, Integer>();

  // public int chain(int n) {
  // if (n == 1)
  // return 1;
  // if (memos.containsKey(n))
  // return memos.get(n);
  // int result = 1 + chain(collatz(n));
  // memos.put(n, result);
  // return result;
  // }

  public long chain(long n) {
    long steps = 1;
    while (n != 1) {
      n = collatz(n);
      steps++;
    }
    return steps;
  }

  public long maxChain(int ceiling) {
    long max = 0;
    long starter = 0;
    long current;
    for (long i = 1; i < ceiling; i++) {
      current = chain(i);
      if (current > max) {
        max = current;
        starter = i;
      }
    }
    return starter;
  }

  public static void main(String[] args) {
    PE014 test = new PE014();
    System.out.println(test.maxChain(2)); // 1
    System.out.println(test.maxChain(10)); // 9
    System.out.println(test.maxChain(100)); // 97
    System.out.println(test.maxChain(10000)); // 6171
    System.out.println(test.maxChain(1000000)); // 837799
  }
}