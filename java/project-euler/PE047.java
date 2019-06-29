
/*
The first two consecutive numbers to have two distinct 
prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have three 
distinct prime factors are:

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19.

Find the first four consecutive integers to have four 
distinct prime factors each. What is the first of 
these numbers?
*/

import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;

public class PE047 {
  public boolean isPrime(int n) {
    if (n < 2)
      return false;
    if (n == 2)
      return true;
    if (n % 2 == 0)
      return false;
    for (int i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0)
        return false;
    }
    return true;
  }

  public List<Integer> primeFactors(int n) {
    List<Integer> factors = new ArrayList<Integer>();
    if (n < 2)
      return factors;
    if (n == 2) {
      factors.add(2);
      return factors;
    }
    if (n % 2 == 0) {
      factors.add(2);
      factors.addAll(this.primeFactors(n / 2));
      return factors;
    }
    for (int i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0 && this.isPrime(i)) {
        factors.add(i);
        factors.addAll(this.primeFactors(n / i));
        return factors;
      }
    }
    factors.add(n);
    return factors;
  }

  public int countDistinctPrimeFactors(int n) {
    List<Integer> list = this.primeFactors(n);
    Set<Integer> uniques = new HashSet<Integer>(list);
    return uniques.size();
  }

  public int specialConsecutives(int n) {
    int i = 0;
    whileloop: while (true) {
      i++;
      for (int j = i; j < i + n; j++) {
        if (this.countDistinctPrimeFactors(j) != n) {
          continue whileloop;
        }
      }
      return i;
    }
  }

  public static void main(String[] args) {
    PE047 test = new PE047();
    System.out.println(test.primeFactors(644)); // 2, 2, 7, 23
    System.out.println(test.primeFactors(645)); // 3, 5, 43
    System.out.println(test.primeFactors(646)); // 2, 17, 19
    System.out.println(test.countDistinctPrimeFactors(644)); // 3
    System.out.println(test.specialConsecutives(1)); // 2
    System.out.println(test.specialConsecutives(2)); // 14
    System.out.println(test.specialConsecutives(3)); // 644
    System.out.println(test.specialConsecutives(4)); // 134043
  }
}