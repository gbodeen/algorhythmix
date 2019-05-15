/*
Starting in the top left corner of a 2×2 grid, and only being able 
to move to the right and down, there are exactly 6 routes to the 
bottom right corner.

How many such routes are there through a 20×20 grid?
*/

public class PE015 {
  public long countPaths(int n) {
    long[][] nodes = new long[n + 1][n + 1];
    for (int r = 0; r <= n; r++) {
      for (int c = 0; c <= n; c++) {
        long top = (r > 0) ? nodes[r - 1][c] : 0;
        long left = (c > 0) ? nodes[r][c - 1] : 0;
        nodes[r][c] = (top + left > 0) ? top + left : 1;
      }
    }
    return nodes[n][n];
  }

  public static void main(String[] args) {
    PE015 test = new PE015();
    System.out.println(test.countPaths(2)); // 6
    System.out.println(test.countPaths(20)); // 137846528820
  }
}