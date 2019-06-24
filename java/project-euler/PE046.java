/*
It was proposed by Christian Goldbach that every odd composite 
number can be written as the sum of a prime and twice a square.

9 = 7 + 2×1^2
15 = 7 + 2×2^2
21 = 3 + 2×3^2
25 = 7 + 2×3^2
27 = 19 + 2×2^2
33 = 31 + 2×1^2

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as 
the sum of a prime and twice a square?
*/

public class PE046 {
  public boolean goldbach(int n) { // let's say it's true for primes
    int s = 0;
    int ss = 2 * s * s;
    while (ss < n) {
      if (this.isPrime(n - ss))
        return true;
      s++;
      ss = 2 * s * s;
    }
    return false;
  }

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

  public int minNonGoldbach(int limit) {
    int i = 33;
    while (i < limit && this.goldbach(i)) {
      i += 2;
    }
    return this.goldbach(i) ? -1 : i;
  }

  public static void main(String[] args) {
    PE046 test = new PE046();
    System.out.println(test.goldbach(9)); // true
    System.out.println(test.goldbach(15)); // true
    System.out.println(test.goldbach(21)); // true
    System.out.println(test.goldbach(25)); // true
    System.out.println(test.goldbach(27)); // true
    System.out.println(test.goldbach(33)); // true
    System.out.println(test.goldbach(23)); // true
    System.out.println(test.minNonGoldbach(1000)); // -1
    System.out.println(test.minNonGoldbach(10000)); // 5777
  }
}