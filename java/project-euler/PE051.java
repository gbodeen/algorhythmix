/*
By replacing the 1st digit of the 2-digit number *3, it turns 
out that six of the nine possible values: 13, 23, 43, 53, 73, 
and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, 
this 5-digit number is the first example having seven primes among 
the ten generated numbers, yielding the family: 56003, 56113, 
56333, 56443, 56663, 56773, and 56993. Consequently 56003, being 
the first member of this family, is the smallest prime with this 
property.

Find the smallest prime which, by replacing part of the number 
(not necessarily adjacent digits) with the same digit, is part 
of an eight prime value family.
*/

public class PE051 {
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

  public int nextPrime(int n) {
    if (n < 2)
      return 2;
    if (n == 2)
      return 3;
    n += (n % 2 == 1) ? 2 : 1;
    while (!this.isPrime(n)) {
      n += 2;
    }
    return n;
  }

  public int[] makeReplacements(int n, int mask) {
    String ns = Integer.toString(n);
    int[] replacements = new int[10];
    for (int d = 0; d <= 9; d++) {
      char[] nsa = ns.toCharArray();
      int bits = mask;
      for (int i = 0; i < ns.length() && bits > 0; i++, bits >>= 1) {
        if ((bits & 1) == 1) {
          nsa[i] = Character.forDigit(d, 10);
        }
      }
      if (nsa[0] != '0') {
        replacements[d] = Integer.valueOf(String.valueOf(nsa));
      }
    }
    return replacements;
  }

  public int primeFamilySize(int n, int mask) {
    int[] family = this.makeReplacements(n, mask);
    boolean containsSelf = false;
    int size = 0;
    for (int member : family) {
      if (this.isPrime(member)) {
        size++;
      }
      if (member == n) {
        containsSelf = true;
      }
    }
    return containsSelf ? size : 0;
  }

  public int maxMask(int n) {
    String ns = Integer.toString(n);
    return (int) Math.pow(2, ns.length()) - 1;
  }

  public int findPrimeFamily(int size) {
    int n = 2;
    int mask = 1;
    int maxmask = this.maxMask(n);
    while (this.primeFamilySize(n, mask) < size) {
      if (mask < maxmask) {
        mask++;
      } else {
        n = this.nextPrime(n);
        mask = 1;
        maxmask = this.maxMask(n);
      }
    }
    return n;
  }

  public static void main(String[] args) {
    PE051 test = new PE051();
    System.out.println(test.makeReplacements(1, 1));
    System.out.println(test.makeReplacements(137, 2));
    System.out.println(test.makeReplacements(137, 5));
    System.out.println(test.nextPrime(0)); // 2
    System.out.println(test.nextPrime(2)); // 3
    System.out.println(test.nextPrime(3)); // 5
    System.out.println(test.nextPrime(20)); // 23
    System.out.println(test.nextPrime(31)); // 37
    System.out.println(test.primeFamilySize(13, 1)); // 6
    System.out.println(test.primeFamilySize(56003, 12)); // 7
    System.out.println(test.findPrimeFamily(2)); // 2
    System.out.println(test.findPrimeFamily(5)); // 11
    System.out.println(test.findPrimeFamily(6)); // 13
    System.out.println(test.findPrimeFamily(7)); // 56003
    System.out.println(test.findPrimeFamily(8)); // 121313
  }
}