# -*- coding: utf-8 -*-
"""
The first two consecutive numbers to have two distinct 
prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have three 
distinct prime factors are:

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19.

Find the first four consecutive integers to have four 
distinct prime factors each. What is the first of 
these numbers?
"""


from math import sqrt


class PE047:
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

  def primeFactors(self, n):
    if n < 2:
      return []
    if n == 2:
      return [2]
    if n % 2 == 0:
      return [2] + self.primeFactors(n / 2)
    for i in range(3, int(sqrt(n)) + 1, 2):
      if n % i == 0 and self.isPrime(i):
        return [i] + self.primeFactors(n / i)
    return [n]

  def countDistinctPrimeFactors(self, n):
    return len(set(self.primeFactors(n)))

  def specialConsecutives(self, n):
    i = 0
    while True:
      i += 1
      success = True
      for j in range(i, i + n):
        if self.countDistinctPrimeFactors(j) != n:
          success = False
          break
      if success:
        return i

  @staticmethod
  def main():
    test = PE047()
    print(test.primeFactors(644))  # 2, 2, 7, 23
    print(test.primeFactors(645))  # 3, 5, 43
    print(test.primeFactors(646))  # 2, 17, 19
    print(test.countDistinctPrimeFactors(644))  # 3
    print(test.specialConsecutives(1))  # 2
    print(test.specialConsecutives(2))  # 14
    print(test.specialConsecutives(3))  # 644
    print(test.specialConsecutives(4))  # 134043


# test
PE047.main()
