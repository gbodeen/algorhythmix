
/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

import java.util.List;
import java.util.ArrayList;

public class PE003 {
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

  public List<Number> primeFactors(Number N) {
    List<Number> factors = new ArrayList<Number>();
    long n = N.longValue();
    if (n < 2) {
      return factors;
    }
    for (int i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        factors.add(i);
        factors.addAll(primeFactors(n / i));
        return factors;
      }
    }
    factors.add(n);
    return factors;
  }

  public static void main(String[] args) {
    PE003 test = new PE003();
    // test isPrime:
    // for (int i = 0; i < 30; i++) {
    // System.out.println(i + " " + (test.isPrime(i) ? "true" : "false"));
    // }
    // test primeFactors:
    // for (int i = 0; i < 30; i++) {
    // System.out.println(i + ":");
    // System.out.println(test.primeFactors(i));
    // }
    System.out.println("13195 " + test.primeFactors(13195)); // [5, 7, 13, 29]
    System.out.println("600851475143 " + test.primeFactors(600851475143L)); // [71, 839, 1471, 6857]
  }
}