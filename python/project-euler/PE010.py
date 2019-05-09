"""
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
"""

import math


class PE010:
  def is_prime(self, n):
    if n < 2:
      return False
    if n == 2:
      return True
    if n % 2 == 0:
      return False
    for i in range(3, int(math.sqrt(n) + 1), 2):
      if n % i == 0:
        return False
    return True

  def sum_of_primes(self, ceiling):
    sum = 0
    if ceiling > 2:
      sum += 2
    for i in range(3, ceiling, 2):
      if self.is_prime(i):
        sum += i
    return sum


test = PE010()
print(test.sum_of_primes(10))  # 17
print(test.sum_of_primes(2000000))  # 142913828922
