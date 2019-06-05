/*
The number 3797 has an interesting property. Being prime 
itself, it is possible to continuously remove digits from 
left to right, and remain prime at each stage: 3797, 797, 
97, and 7. Similarly we can work from right to left: 3797, 
379, 37, and 3.

Find the sum of the only eleven primes that are both 
truncatable from left to right and right to left. NOTE: 2, 
3, 5, and 7 are not considered to be truncatable primes.
*/

public class PE037 {
  public boolean isPrime(int n) {
    if (n < 2)
      return false;
    if (n == 2)
      return true;
    if (n % 2 == 0)
      return false;
    for (int i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0)
        return false;
    }
    return true;
  }

  public String[] allTruncations(String s) {
    int L = s.length();
    int LL = L * 2 - 1;
    String[] truncs = new String[LL];
    truncs[LL - 1] = s;
    int k = 0;
    for (int i = 1; i < s.length(); i++) {
      truncs[k++] = s.substring(0, i);
      truncs[k++] = s.substring(L - i);
    }
    return truncs;
  }

  public boolean isTruncatablePrime(int n) {
    if (n < 8)
      return false;
    String[] truncs = allTruncations(Integer.toString(n));
    for (String numStr : truncs) {
      if (!isPrime(Integer.valueOf(numStr)))
        return false;
    }
    return true;
  }

  public int[] truncatablePrimes() {
    int[] tps = new int[20];
    int L = 1;
    for (int i = 11; i < 1000000; i += 2) {
      if (isTruncatablePrime(i)) {
        tps[0] += i;
        tps[L++] = i;
      }
    }
    return tps;
  }

  public static void main(String[] args) {
    PE037 test = new PE037();
    String[] truncs = test.allTruncations("3797");
    for (String s : truncs) {
      System.out.println(s);
    }
    System.out.println(test.isTruncatablePrime(3797)); // true
    System.out.println(test.isTruncatablePrime(7)); // false
    System.out.println(test.isTruncatablePrime(23)); // true
    System.out.println(test.isTruncatablePrime(41)); // false
    int[] tps = test.truncatablePrimes();
    for (int x : tps) {
      System.out.println(x);
    }
    // 748317 ...
  }
}
