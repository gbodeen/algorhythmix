# -*- coding: utf-8 -*-
"""
Considering quadratics of the form:

n2+an+b, where |a|<1000 and |b|≤1000

where |n| is the modulus/absolute value of n
e.g. |11|=11 and |−4|=4
Find the product of the coefficients, a and b, for the quadratic 
expression that produces the maximum number of primes for 
consecutive values of n, starting with n=0.
"""


import math


class PE027:
  def quadratic(self, a, b):
    return lambda n: (n + a) * n + b

  def is_prime(self, n):
    if n < 2:
      return False
    if n == 2:
      return True
    if n % 2 == 0:
      return False
    for i in range(3, int(math.sqrt(n)) + 1, 2):
      if n % i == 0:
        return False
    return True

  def count_quadratic_primes(self, a, b):
    maybe_prime = self.quadratic(a, b)
    n = 0
    while self.is_prime(maybe_prime(n)):
      n += 1
    return n

  def max_quadratic(self):
    max = 0
    for a in range(-999, 1000):
      for b in range(-1000, 1001):
        current = self.count_quadratic_primes(a, b)
        if current > max:
          max = current
          prod = a * b
    return prod


# tests
test = PE027()
print(test.count_quadratic_primes(1, 41))  # 40
print(test.count_quadratic_primes(-79, 1601))  # 80
print(test.max_quadratic())  # -59231
