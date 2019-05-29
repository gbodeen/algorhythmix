/*
In England the currency is made up of pound, £, and pence, p, 
and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
*/

public class PE031 {
  public int countChangeWays(int n) {
    int[] coins = { 2, 5, 10, 20, 50, 100, 200 };
    int[] results = new int[n + 1];
    java.util.Arrays.fill(results, 1);
    for (int c : coins) {
      for (int p = 0; p <= n; p++) {
        results[p] += p >= c ? results[p - c] : 0;
      }
    }
    return results[n];
  }

  public static void main(String[] args) {
    PE031 test = new PE031();
    System.out.println(test.countChangeWays(1)); // 1
    System.out.println(test.countChangeWays(2)); // 2
    System.out.println(test.countChangeWays(3)); // 2
    System.out.println(test.countChangeWays(4)); // 3
    System.out.println(test.countChangeWays(5)); // 4
    System.out.println(test.countChangeWays(10)); // 11
    System.out.println(test.countChangeWays(200)); // 73682
  }
}
