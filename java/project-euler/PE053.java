/*
There are exactly ten ways of selecting three from five, 12345:

123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

In combinatorics, we use the notation, 5C3=10.

In general, nCr=n!/r!(n−r)!, where r≤n, n!=n×(n−1)×...×3×2×1, and 0!=1.

It is not until n=23, that a value exceeds one-million: 23C10=1144066.

How many, not necessarily distinct, values of nCr for 1≤n≤100, are 
greater than one-million?
*/

public class PE053 {
  public boolean isComboOverMillion(int n, int r) {
    double max = 1000000;

    double N = this.factorial(n);
    if (N < max)
      return false;

    double R = this.factorial(r);
    if (N / R < max)
      return false;

    double D = this.factorial(n - r);
    return (N / (R * D)) >= max;
  }

  public int countBigCombos() {
    int count = 0;
    for (int n = 1; n <= 100; n++) {
      for (int r = 0; r <= n; r++) {
        if (this.isComboOverMillion(n, r)) {
          count++;
        }
      }
    }
    return count;
  }

  public double factorial(int n) {
    double fact = 1;
    for (int i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }

  public static void main(String[] args) {
    PE053 test = new PE053();
    System.out.println(test.factorial(5)); // 120
    System.out.println(test.isComboOverMillion(23, 9));
    System.out.println(test.isComboOverMillion(23, 10));
    System.out.println(test.countBigCombos()); // 4075
  }
}