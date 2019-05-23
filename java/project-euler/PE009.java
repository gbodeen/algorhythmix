/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, 
for which, a2 + b2 = c2

For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

public class PE009 {
  public static void main(String[] args) {
    int c;
    for (int a = 1; a < 334; a++) {
      for (int b = a + 1; b < 500; b++) {
        c = 1000 - a - b;
        if (c < b) {
          break;
        }
        if (a * a + b * b - c * c == 0) {
          System.out.println(a * b * c); // 31875000
          return;
        }
      }
    }
  }
}