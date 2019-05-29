/*
Surprisingly there are only three numbers that can be 
written as the sum of fourth powers of their digits:

1634 = 1^4 + 6^4 + 3^4 + 4^4
8208 = 8^4 + 2^4 + 0^4 + 8^4
9474 = 9^4 + 4^4 + 7^4 + 4^4
As 1 = 1^4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as 
the sum of fifth powers of their digits.
*/

public class PE030 {
  public int digitPowSum(int n, int p) {
    int sum = 0;
    int rem;
    while (n > 0) {
      rem = n % 10;
      sum += Math.pow(rem, p);
      n = (n - rem) / 10;
    }
    return sum;
  }

  public boolean digitPowSumEqSelf(int n, int p) {
    return n == digitPowSum(n, p);
  }

  public int[] searchNums(int p) {
    int[] eqs = new int[10];
    int idx = 0;
    for (int i = 2; i < Math.pow(10, p + 1); i++) {
      if (digitPowSumEqSelf(i, p)) {
        eqs[idx] = i;
        idx++;
      }
    }
    return eqs;
  }

  public int sumArray(int[] R) {
    int sum = 0;
    for (int i = 0; i < R.length; i++) {
      sum += R[i];
    }
    return sum;
  }

  public static void main(String[] args) {
    PE030 test = new PE030();
    System.out.println(test.digitPowSum(777, 1)); // 21
    System.out.println(test.digitPowSum(777, 2)); // 147
    System.out.println(test.digitPowSumEqSelf(1634, 4)); // true
    System.out.println(test.searchNums(1));
    System.out.println(test.searchNums(2));
    System.out.println(test.searchNums(3));
    System.out.println(test.searchNums(4));
    System.out.println(test.searchNums(5));
    System.out.println(test.sumArray(test.searchNums(4))); // 19316
    System.out.println(test.sumArray(test.searchNums(5))); // 443839
  }
}
