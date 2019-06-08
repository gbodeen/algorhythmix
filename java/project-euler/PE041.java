/*
We shall say that an n-digit number is pandigital if it makes 
use of all the digits 1 to n exactly once. For example, 2143 
is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?
*/

public class PE041 {
  public boolean isPandigital(int n) {
    if (n > 987654321)
      return false;
    String s = Integer.toString(n);
    for (int i = 1; i <= s.length(); i++) {
      if (!s.contains(Integer.toString(i)))
        return false;
    }
    return true;
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

  public int maxPandigitalPrime(int max) {
    for (int i = max; i > 0; i--) {
      if (this.isPandigital(i) && this.isPrime(i)) {
        return i;
      }
    }
    return -1;
  }

  public static void main(String[] args) {
    PE041 test = new PE041();
    System.out.println(test.isPandigital(2143)); // true
    System.out.println(test.isPandigital(987654321)); // true
    System.out.println(test.isPandigital(98654321)); // false
    System.out.println(test.isPandigital(1023)); // false
    System.out.println(test.maxPandigitalPrime(10000000)); // 7652413
  }
}