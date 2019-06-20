/*
Triangle, pentagonal, and hexagonal numbers are generated 
by the following formulae:

Triangle	 	Tn=n(n+1)/2	 	1, 3, 6, 10, 15, ...
Pentagonal	 	Pn=n(3n−1)/2	 	1, 5, 12, 22, 35, ...
Hexagonal	 	Hn=n(2n−1)	 	1, 6, 15, 28, 45, ...
It can be verified that T285 = P165 = H143 = 40755.

Find the next triangle number that is also pentagonal and 
hexagonal.
*/

public class PE045 {
  public long triangular(long n) {
    return n * (n + 1) / 2;
  }

  public boolean isPentagonal(long n) {
    return (1 + Math.sqrt(1 + 24 * n)) % 6 == 0;
  }

  public boolean isHexagonal(long n) {
    return (1 + Math.sqrt(1 + 8 * n)) % 4 == 0;
  }

  public long next356(long n) {
    long tri;
    do {
      tri = this.triangular(++n);
    } while (!this.isPentagonal(tri) || !this.isHexagonal(tri));
    return tri;
  }

  public static void main(String[] args) {
    PE045 test = new PE045();
    System.out.println(test.isHexagonal(1)); // true
    System.out.println(test.isHexagonal(2)); // false
    System.out.println(test.isHexagonal(6)); // true
    System.out.println(test.isHexagonal(14)); // false
    System.out.println(test.isHexagonal(15)); // true
    System.out.println(test.isHexagonal(45)); // true
    System.out.println(test.isHexagonal(46)); // false
    System.out.println(test.triangular(285)); // 40755
    System.out.println(test.isPentagonal(40755)); // true
    System.out.println(test.isHexagonal(40755)); // true
    System.out.println(test.next356(1)); // 40755
    System.out.println(test.next356(285)); // 1533776805
  }
}