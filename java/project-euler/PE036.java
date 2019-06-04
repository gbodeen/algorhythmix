/*
The decimal number, 585 = 1001001001 (binary), 
is palindromic in both bases.

Find the sum of all numbers, less than one million, 
which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either 
base, may not include leading zeros.)
*/

public class PE036 {
  public boolean isPalindrome(String s) {
    int L = s.length();
    int mid = (L + 1) / 2;
    for (int i = 0; i < mid; i++) {
      if (s.charAt(i) != s.charAt(L - 1 - i))
        return false;
    }
    return true;
  }

  public boolean isDoubleBasePalindrome(int n) {
    return isPalindrome(Integer.toString(n)) && isPalindrome(Integer.toString(n, 2));
  }

  public int sum2BasePals() {
    int sum = 0;
    for (int i = 1; i < 1000000; i += 2) {
      if (isDoubleBasePalindrome(i))
        sum += i;
    }
    return sum;
  }

  public static void main(String[] args) {
    PE036 test = new PE036();
    System.out.println(test.isPalindrome("1")); // true
    System.out.println(test.isPalindrome("22")); // true
    System.out.println(test.isPalindrome("343")); // true
    System.out.println(test.isPalindrome("5665")); // true
    System.out.println(test.isPalindrome("7889887")); // true
    System.out.println(test.isPalindrome("10")); // false
    System.out.println(test.isPalindrome("345")); // false
    System.out.println(test.isDoubleBasePalindrome(585)); // true
    System.out.println(test.isDoubleBasePalindrome(50)); // false
    System.out.println(test.sum2BasePals()); // 872187
  }
}
