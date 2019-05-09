/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

public class PE010 {
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

  public long sumOfPrimes(int ceiling) {
    long sum = 0;
    if (ceiling > 2)
      sum += 2;
    for (int i = 3; i < ceiling; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
  }

  public static void main(String[] args) {
    PE010 test = new PE010();
    System.out.println(test.sumOfPrimes(10)); // 17
    System.out.println(test.sumOfPrimes(2000000)); // 142913828922
  }
}