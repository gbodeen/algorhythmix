
/*
The number, 1406357289, is a 0 to 9 pandigital number because 
it is made up of each of the digits 0 to 9 in some order, but 
it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In 
this way, we note the following:

d2d3d4=406 is divisible by 2
d3d4d5=063 is divisible by 3
d4d5d6=635 is divisible by 5
d5d6d7=357 is divisible by 7
d6d7d8=572 is divisible by 11
d7d8d9=728 is divisible by 13
d8d9d10=289 is divisible by 17
Find the sum of all 0 to 9 pandigital numbers with this property.
*/

import java.util.Arrays;

public class PE043 {
  public String nextPermute(String s) {
    int i = s.length() - 1;
    while (i > 0 && Integer.valueOf(s.charAt(i - 1)) >= Integer.valueOf(s.charAt(i)))
      i--;
    char[] c = s.substring(i).toCharArray();
    Arrays.sort(c);
    s = s.substring(0, i) + String.valueOf(c);
    if (i == 0)
      return s;
    int j = i;
    while (j < s.length() && Integer.valueOf(s.charAt(j)) <= Integer.valueOf(s.charAt(i - 1)))
      j++;
    s = s.substring(0, i - 1) + s.charAt(j) + s.substring(i, j) + s.charAt(i - 1) + s.substring(j + 1);
    return s;
  }

  public boolean isSpecialDivisible(String s) {
    int[] divisors = { 2, 3, 5, 7, 11, 13, 17 };
    for (int i = 1; i < 8; i++) {
      if (Integer.valueOf(s.substring(i, i + 3)) % divisors[i - 1] > 0)
        return false;
    }
    return true;
  }

  public long sumOfSpecials() {
    long sum = 0;
    String num = "1023456789";
    while (Long.valueOf(num) < 9876543210L) {
      num = this.nextPermute(num);
      if (this.isSpecialDivisible(num)) {
        sum += Long.valueOf(num);
      }
    }
    return sum;
  }

  public static void main(String[] args) {
    PE043 test = new PE043();
    System.out.println(test.nextPermute("1023456789")); // 1023456798
    System.out.println(test.nextPermute("1023456798")); // 1203456879
    System.out.println(test.nextPermute("7630498521")); // 7630512489
    System.out.println(test.nextPermute("9876543210")); // 9876543210
    System.out.println(test.nextPermute("8976543210")); // 9012345678
    System.out.println(test.isSpecialDivisible("1406357289")); // true
    System.out.println(test.isSpecialDivisible("9876543210")); // false
    System.out.println(test.isSpecialDivisible("1023456789")); // false
    System.out.println(test.sumOfSpecials()); // 16695334890
  }
}