/*
Pentagonal numbers are generated by the formula, 
Pn=n(3n−1)/2. The first ten pentagonal numbers are:

1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

It can be seen that P4 + P7 = 22 + 70 = 92 = P8. 
However, their difference, 70 − 22 = 48, is not pentagonal.

Find the pair of pentagonal numbers, Pj and Pk, for which 
their sum and difference are pentagonal and D = |Pk − Pj| 
is minimised; what is the value of D?
*/

public class PE044 {
  public long pentagonal(long n) {
    return n * (3 * n - 1) / 2;
  }

  public boolean isPentagonal(long n) {
    return (1 + Math.sqrt(1 + 24 * n)) % 6 == 0;
  }

  public long findPair() {
    long maxn = 10000L;
    long minDiff = Long.MAX_VALUE;
    for (long i = 1; i < maxn; i++) {
      long a = this.pentagonal(i);
      for (long j = i + 1; j <= maxn; j++) {
        long b = this.pentagonal(j);
        if (this.isPentagonal(a + b) && this.isPentagonal(b - a)) {
          if (b - a < minDiff) {
            minDiff = b - a;
          }
        }
      }
    }
    return minDiff;
  }

  public static void main(String[] args) {
    PE044 test = new PE044();
    System.out.println(test.pentagonal(1)); // 1
    System.out.println(test.pentagonal(2)); // 5
    System.out.println(test.pentagonal(3)); // 12
    System.out.println(test.pentagonal(4)); // 22
    System.out.println(test.pentagonal(5)); // 35
    System.out.println(test.isPentagonal(1)); // true
    System.out.println(test.isPentagonal(4)); // false
    System.out.println(test.isPentagonal(5)); // true
    System.out.println(test.isPentagonal(12)); // true
    System.out.println(test.isPentagonal(13)); // false
    System.out.println(test.isPentagonal(144)); // false
    System.out.println(test.isPentagonal(145)); // true
    System.out.println(test.isPentagonal(146)); // false
    System.out.println(test.findPair()); // 5482660
  }
}