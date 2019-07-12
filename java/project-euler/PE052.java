
/*
It can be seen that the number, 125874, and its double, 251748, 
contain exactly the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, 
and 6x, contain the same digits.
*/

import java.util.Arrays;

public class PE052 {
  public int smallest6xPermutable() {
    int n = 123456;
    while (!this.is6xPermutable(n)) {
      n++;
    }
    return n;
  }

  public boolean isPermutation(int a, int b) {
    char[] a2 = Integer.toString(a).toCharArray();
    char[] b2 = Integer.toString(b).toCharArray();
    Arrays.sort(a2);
    Arrays.sort(b2);
    String strA = new String(a2);
    String strB = new String(b2);
    return strA.equals(strB);
  }

  public boolean is6xPermutable(int n) {
    return this.isPermutation(n, n * 2) && this.isPermutation(n, n * 3) && this.isPermutation(n, n * 4)
        && this.isPermutation(n, n * 5) && this.isPermutation(n, n * 6);
  }

  public static void main(String[] args) {
    PE052 test = new PE052();
    System.out.println(test.isPermutation(125874, 125874 * 2));
    System.out.println(test.smallest6xPermutable()); // 142857
  }
}
