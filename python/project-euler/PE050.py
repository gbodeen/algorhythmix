# -*- coding: utf-8 -*-
"""
The prime 41, can be written as the sum of six consecutive primes:
41 = 2 + 3 + 5 + 7 + 11 + 13

This is the longest sum of consecutive primes that adds to a prime
below one-hundred.

The longest sum of consecutive primes below one-thousand that adds
to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the
most consecutive primes?
"""


from math import sqrt


class PE050:
  def isPrime(self, n):
    if n < 2:
      return False
    if n == 2:
      return True
    if n % 2 == 0:
      return False
    for i in range(3, int(sqrt(n)) + 1, 2):
      if n % i == 0:
        return False
    return True

  def nextPrime(self, n):
    if n < 2:
      return 2
    if n == 2:
      return 3
    n += 2
    while not self.isPrime(n):
      n += 2
    return n

  def primeSumOfConsecPrimes(self, max=100):
    primes = []
    p = self.nextPrime(0)
    primeseq = []
    while p < max:
      primes.append(p)
      L = 0
      R = 1
      while R > L and R <= len(primes):
        seqsum = sum(primes[L:R])
        if seqsum == p:
          if (R - L > len(primeseq)):
            primeseq = primes[L:R]
            primesum = p
          break
        elif seqsum < p:
          R += 1
        elif seqsum > p:
          L += 1
        else:
          return -1
      p = self.nextPrime(p)
    return primesum

  @staticmethod
  def main():
    test = PE050()
    # p = 0
    # for i in range(10):
    #   p = test.nextPrime(p)
    #   print(i, p)
    print(test.primeSumOfConsecPrimes(10))  # 5, 2: 3 L2
    print(test.primeSumOfConsecPrimes(100))  # 41, 2: 13 L6
    print(test.primeSumOfConsecPrimes(1000))  # 953, 7: 89 L21
    print(test.primeSumOfConsecPrimes(10000))  # 9521, 3: 317 L65
    # print(test.primeSumOfConsecPrimes(100000)) # 92951, 3: 1097 L183
    # print(test.primeSumOfConsecPrimes(1000000)) # : primesum: 997651, first: 7, len: 543, last: 3931}


PE050.main()
