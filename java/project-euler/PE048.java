/*
The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 
1^1 + 2^2 + 3^3 + ... + 1000^1000.
*/

public class PE048 {
  public long powmod(long b, long p, long m) {
    long r = 1;
    for (long i = 0; i < p; i++) {
      r = (r * b) % m;
    }
    return r % m;
  }

  public long selfPowSeries(long end, long mod) {
    long sum = 0;
    for (long i = 1; i <= end; i++) {
      sum += this.powmod(i, i, mod) % mod;
    }
    return sum % mod;
  }

  public static void main(String[] args) {
    PE048 test = new PE048();
    System.out.println(test.powmod(4L, 4L, (long) Math.pow(10, 6))); // 256
    System.out.println(test.selfPowSeries(10L, (long) Math.pow(10, 12))); // 10405071317
    System.out.println(test.selfPowSeries(1000L, (long) Math.pow(10, 10))); // 9110846700
  }
}