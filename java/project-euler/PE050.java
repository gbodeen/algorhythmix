
/*
The prime 41, can be written as the sum of six consecutive primes:
41 = 2 + 3 + 5 + 7 + 11 + 13

This is the longest sum of consecutive primes that adds to a prime 
below one-hundred.

The longest sum of consecutive primes below one-thousand that adds 
to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the 
most consecutive primes?
*/

import java.util.List;
import java.util.ArrayList;

public class PE050 {
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
    n += 2;
    while (!isPrime(n)) {
      n += 2;
    }
    return n;
  }

  public int primeSumOfConsecPrimes(int max) {
    List<Integer> primes = new ArrayList<Integer>();
    int p = nextPrime(0);
    int primesum = 0;
    int maxseqsize = 0;
    // List<Integer> primeseq = new ArrayList<Integer>();
    do {
      primes.add(p);
      int L = 0;
      int R = 1;
      while (R > L && R <= primes.size()) {
        int sum = arraySum(primes.subList(L, R));
        if (sum == p) {
          if (R - L > maxseqsize) {
            maxseqsize = R - L;
            primesum = p;
          }
          break;
        } else if (sum < p) {
          R++;
        } else if (sum > p) {
          L++;
        } else {
          return -1;
        }
      }
      p = nextPrime(p);
    } while (p < max);
    // int[] results = { primesum, primeseq.get(0), primeseq.size(),
    // primeseq.get(primeseq.size() - 1) };
    return primesum;
  }

  public int arraySum(List<Integer> arr) {
    int sum = 0;
    for (int i : arr) {
      sum += i;
    }
    return sum;
  }

  public static void main(String[] args) {
    PE050 test = new PE050();
    int p = 0;
    for (int i = 0; i < 10; i++) {
      p = test.nextPrime(p);
      System.out.println(p);
    }
    System.out.println(test.primeSumOfConsecPrimes(10)); // 5, 2:3 L2
    System.out.println(test.primeSumOfConsecPrimes(100)); // 41, 2:13 L6
    System.out.println(test.primeSumOfConsecPrimes(1000)); // 953, 7:89 L21
    System.out.println(test.primeSumOfConsecPrimes(10000)); // 9521, 3:317 L65
    System.out.println(test.primeSumOfConsecPrimes(100000)); // 92951, 3:1097 L183
    System.out.println(test.primeSumOfConsecPrimes(1000000)); // 997651
  }
}