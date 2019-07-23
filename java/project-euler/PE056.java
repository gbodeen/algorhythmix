
/*
Considering natural numbers of the form, a ** b, where 
a, b < 100, what is the maximum digital sum?
*/

import java.math.BigInteger;

public class PE056 {
  public int maxDigitSum() {
    int max = 0;
    for (int a = 2; a < 100; a++) {
      for (int b = 2; b < 100; b++) {
        int temp = this.digitSum(this.bigPow(a, b));
        if (temp > max) {
          max = temp;
        }
      }
    }
    return max;
  }

  public int digitSum(BigInteger n) {
    char[] cn = n.toString().toCharArray();
    int sum = 0;
    for (char c : cn) {
      sum += Character.getNumericValue(c);
    }
    return sum;
  }

  public BigInteger bigPow(int b, int p) {
    BigInteger B = BigInteger.valueOf(b);
    return B.pow(p);
  }

  public static void main(String[] args) {
    PE056 test = new PE056();
    BigInteger foo = BigInteger.valueOf(456);
    System.out.println(test.digitSum(foo));
    System.out.println(test.bigPow(2, 8));
    System.out.println(test.maxDigitSum()); // 972
  }
}
