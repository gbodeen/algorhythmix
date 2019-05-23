/*
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
 * that the 6th prime is 13. What is the 10 001st prime number?
 */

public class PE007 {
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

  public int nthPrime(int n) {
    int count = 1;
    int prime = 2;
    for (int i = 3; count < n; i += 2) {
      if (isPrime(i)) {
        count++;
        prime = i;
      }
    }
    return prime;
  }

  public static void main(String[] args) {
    PE007 test = new PE007();
    System.out.println(test.nthPrime(6)); // 13
    System.out.println(test.nthPrime(10001)); // 104743
  }
}