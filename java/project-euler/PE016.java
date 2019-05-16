
/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 2^1000?
*/

import java.math.BigInteger;

public class PE016 {
  public int digitSum(String s) {
    int sum = 0;
    for (int i = 0; i < s.length(); i++) {
      sum += Character.getNumericValue(s.charAt(i));
    }
    return sum;
  }

  public String bigPow2(int n) {
    return BigInteger.valueOf(2).pow(n).toString();
  }

  public static void main(String[] args) {
    PE016 test = new PE016();
    System.out.println(test.digitSum(test.bigPow2(15))); // 26
    System.out.println(test.digitSum(test.bigPow2(1000))); // 1366
  }
}