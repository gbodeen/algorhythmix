"""
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
"""

import math


class PE003:
  def is_prime(self, n):
    if n < 2:
      return False
    if n == 2:
      return True
    if n % 2 == 0:
      return False
    for i in range(2, math.floor(math.sqrt(n) + 1)):
      if (n % i == 0):
        return False
    return True

  def prime_factors(self, n):
    if n < 2:
      return []
    for i in range(2, math.floor(math.sqrt(n) + 1)):
      if n % i == 0 and self.is_prime(i):
        return [i] + self.prime_factors(n // i)
    return [n]


test = PE003()
# # test is_prime:
# for i in range(30):
#   print(i, test.is_prime(i))
# # test prime_factors:
# for i in range(30):
#   print(i, test.prime_factors(i))
print(test.prime_factors(13195))  # [5, 7, 13, 29]
print(test.prime_factors(600851475143))  # [71, 839, 1471, 6857]
