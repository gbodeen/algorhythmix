
/*
Considering quadratics of the form:

n2+an+b, where |a|<1000 and |b|≤1000

where |n| is the modulus/absolute value of n
e.g. |11|=11 and |−4|=4
Find the product of the coefficients, a and b, for the quadratic 
expression that produces the maximum number of primes for 
consecutive values of n, starting with n=0.
*/

import java.util.function.BiFunction;

public class PE027 {

  public boolean isPrime(Integer n) {
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

  public Integer countQuadraticPrimes(Integer a, Integer b) {
    Quadratic maybePrime = new Quadratic(a, b);
    Integer n = 0;
    while (isPrime(maybePrime.f(n)))
      n++;
    return n;
  }

  public Integer maxQuadratic() {
    Integer max = 0, current, prod = 0;
    for (Integer a = -999; a < 1000; a++) {
      for (Integer b = -1000; b <= 1000; b++) {
        current = countQuadraticPrimes(a, b);
        if (current > max) {
          max = current;
          prod = a * b;
        }
      }
    }
    return prod;
  }

  public static void main(String[] args) {
    PE027 test = new PE027();
    System.out.println(test.countQuadraticPrimes(1, 41)); // 40
    System.out.println(test.countQuadraticPrimes(-79, 1601)); // 80
    System.out.println(test.maxQuadratic()); // -59231
  }
}

class Quadratic {
  int a;
  int b;

  public Quadratic(int a, int b) {
    this.a = a;
    this.b = b;
  }

  public int f(int n) {
    return (n + a) * n + b;
  }
}
