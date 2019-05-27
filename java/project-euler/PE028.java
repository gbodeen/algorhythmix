/*
Starting with the number 1 and moving to the right in a clockwise 
direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals 
is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 
spiral formed in the same way?
*/

public class PE028 {
  public int diagonalSum(int n) {
    if (n == 0)
      return 1;
    int sum = 1;
    for (int i = 1; i <= n; i++) {
      sum += 4 * (4 * i * i + i + 1);
    }
    return sum;
  }

  public static void main(String[] args) {
    PE028 test = new PE028();
    System.out.println(test.diagonalSum(0)); // 1
    System.out.println(test.diagonalSum(1)); // 25
    System.out.println(test.diagonalSum(2)); // 101
    System.out.println(test.diagonalSum(3)); // 261
    System.out.println(test.diagonalSum(500)); // 669171001
  }
}
