/*
A perfect number is a number for which the sum of its proper divisors is 
exactly equal to the number. For example, the sum of the proper divisors 
of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect 
number.

A number n is called deficient if the sum of its proper divisors is less 
than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the 
smallest number that can be written as the sum of two abundant numbers is 
24. By mathematical analysis, it can be shown that all integers greater 
than 28123 can be written as the sum of two abundant numbers. However, 
this upper limit cannot be reduced any further by analysis even though it 
is known that the greatest number that cannot be expressed as the sum of 
two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the 
sum of two abundant numbers.
*/

public class PE023 {
  public int limit = 28123;
  public boolean[] abundants = new boolean[limit + 1];
  private boolean abundantsNotFound = true;

  public int sumOfDivisors(int n) {
    int sum = 0;
    int sqrtN = (int) Math.ceil(Math.sqrt(n));
    for (int i = 1; i < sqrtN; i++) {
      if (n % i == 0) {
        sum += i;
        sum += n / i;
      }
    }
    if (sqrtN * sqrtN == n) {
      sum += sqrtN;
    }
    return sum - n;
  }

  public boolean isAbundant(int n) {
    return (sumOfDivisors(n) > n);
  }

  private void findAbundants() {
    for (int i = 1; i <= limit; i++) {
      abundants[i] = isAbundant(i);
    }
    abundantsNotFound = false;
  }

  public boolean isSumOf2Abundants(int n) {
    if (abundantsNotFound) {
      findAbundants();
    }
    for (int i = 0; i <= limit; i++) {
      if (abundants[i] && n - i > 0 && abundants[n - i]) {
        return true;
      }
    }
    return false;
  }

  public int unabundance() {
    int sum = 0;
    for (int i = 1; i <= limit; i++) {
      if (!isSumOf2Abundants(i)) {
        sum += i;
      }
    }
    return sum;
  }

  public static void main(String[] args) {
    PE023 test = new PE023();
    // for (int i = 10; i < 31; i += 2) {
    // System.out.println(i);
    // System.out.println(test.isAbundant(i));
    // }
    System.out.println(test.unabundance()); // 4179871
  }
}