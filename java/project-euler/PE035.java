/*
The number, 197, is called a circular prime because 
all rotations of the digits: 197, 971, and 719, are 
themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 
11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?
*/

public class PE035 {
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

  public String[] allRotations(String s) {
    String[] rots = new String[s.length()];
    rots[0] = s;
    for (int i = 1; i < s.length(); i++) {
      rots[i] = s.substring(i) + s.substring(0, i);
    }
    return rots;
  }

  public boolean isCircularPrime(int n) {
    String[] numStrs = allRotations(Integer.toString(n));
    for (String numStr : numStrs) {
      int num = Integer.valueOf(numStr);
      if (!isPrime(num))
        return false;
    }
    return true;
  }

  public int countCircularPrimes(int limit) {
    int count = 0;
    if (isCircularPrime(2))
      count++;
    for (int i = 3; i < limit; i += 2) {
      if (isCircularPrime(i))
        count++;
    }
    return count;
  }

  public static void main(String[] args) {
    PE035 test = new PE035();
    System.out.println(test.allRotations("1"));
    System.out.println(test.allRotations("12"));
    System.out.println(test.allRotations("123"));
    System.out.println(test.allRotations("1234"));
    System.out.println(test.allRotations("12345"));
    System.out.println(test.allRotations("123456"));
    System.out.println(test.isCircularPrime(2)); // true
    System.out.println(test.isCircularPrime(9)); // false
    System.out.println(test.isCircularPrime(13)); // true
    System.out.println(test.isCircularPrime(17)); // true
    System.out.println(test.isCircularPrime(23)); // false
    System.out.println(test.isCircularPrime(73)); // true
    System.out.println(test.countCircularPrimes(100)); // 13
    System.out.println(test.countCircularPrimes(1000000)); // 55
  }
}