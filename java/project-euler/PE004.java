/*
A palindromic number reads the same both ways. The largest palindrome 
made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

public class PE004 {

  public boolean isPalindrome(int i) {
    return isPalindrome(String.valueOf(i));
  }

  public boolean isPalindrome(String s) {
    int l = s.length();
    for (int i = 0; i < l; i++) {
      if (s.charAt(i) != s.charAt(l - 1 - i)) {
        return false;
      }
    }
    return true;
  }

  public int findMaxPalindromicProduct(int start) {
    int max = 0;
    int prod;
    for (int i = start; i >= 0; i--) {
      for (int j = start; j >= i; j--) {
        prod = i * j;
        if (prod > max && isPalindrome(prod)) {
          max = prod;
        }
      }
    }
    return max;
  }

  public static void main(String[] args) {
    PE004 test = new PE004();
    System.out.println(test.findMaxPalindromicProduct(99)); // 9009
    System.out.println(test.findMaxPalindromicProduct(999)); // 906609
  }
}