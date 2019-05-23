/*
2520 is the smallest number that can be divided by 
each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly 
divisible by all of the numbers from 1 to 20?
*/

public class PE005 {
  public int lcm(int a, int b) {
    return a / gcd(a, b) * b;
  }

  public int gcd(int a, int b) {
    int temp;
    while (b != 0) {
      temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  public int rangelcm(int max) {
    int prod = 1;
    for (int i = 2; i <= max; i++) {
      prod = lcm(prod, i);
    }
    return prod;
  }

  public static void main(String[] args) {
    PE005 test = new PE005();
    System.out.println(test.rangelcm(10)); // 2520
    System.out.println(test.rangelcm(20)); // 232792560
  }
}