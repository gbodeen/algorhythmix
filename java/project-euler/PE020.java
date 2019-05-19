
/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

import java.math.BigInteger;

public class PE020 {
  public BigInteger factorial(int n) {
    BigInteger prod = BigInteger.valueOf(1);
    for (int i = 2; i <= n; i++) {
      prod = BigInteger.valueOf(i).multiply(prod);
    }
    return prod;
  }

  public int digitSum(BigInteger n) {
    int sum = 0;
    while (n.compareTo(BigInteger.valueOf(0)) > 0) {
      sum += n.mod(BigInteger.valueOf(10)).intValue();
      n = n.divide(BigInteger.valueOf(10));
    }
    return sum;
  }

  public static void main(String[] args) {
    PE020 test = new PE020();
    System.out.println(test.digitSum(test.factorial(10))); // 27
    System.out.println(test.digitSum(test.factorial(100))); // 648
  }
}