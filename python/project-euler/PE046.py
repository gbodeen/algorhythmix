# -*- coding: utf-8 -*-
"""
It was proposed by Christian Goldbach that every odd composite 
number can be written as the sum of a prime and twice a square.

9 = 7 + 2×1^2
15 = 7 + 2×2^2
21 = 3 + 2×3^2
25 = 7 + 2×3^2
27 = 19 + 2×2^2
33 = 31 + 2×1^2

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as 
the sum of a prime and twice a square?
"""


from math import sqrt


class PE046:
  def goldbach(self, n):  # let's say it's true for primes
    s = 0
    ss = 2 * s * s
    while ss < n:
      if self.isPrime(n - ss):
        return True
      s += 1
      ss = 2 * s * s
    return False

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

  def minNonGoldbach(self, limit=1000):
    i = 33
    while i < limit and self.goldbach(i):
      i += 2
    return i if not self.goldbach(i) else -1

  @staticmethod
  def main():
    test = PE046()
    print(test.goldbach(9))  # true
    print(test.goldbach(15))  # true
    print(test.goldbach(21))  # true
    print(test.goldbach(25))  # true
    print(test.goldbach(27))  # true
    print(test.goldbach(33))  # true
    print(test.goldbach(23))  # true
    print(test.minNonGoldbach(1000))  # -1
    print(test.minNonGoldbach(10000))  # 5777


# test
PE046.main()
