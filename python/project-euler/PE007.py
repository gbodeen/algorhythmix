"""
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
we can see that the 6th prime is 13.
What is the 10 001st prime number?
"""

import math


class PE007:
  def is_prime(self, n):
    if n < 2:
      return False
    if n == 2:
      return True
    if n % 2 == 0:
      return False
    for i in range(2, int(math.sqrt(n)) + 1):
      if (n % i == 0):
        return False
    return True

  def nth_prime(self, n):
    count = 1
    prime = 2
    i = 3
    while (count < n):
      if self.is_prime(i):
        count += 1
        prime = i
      i += 2
    return prime


test = PE007()
print(test.nth_prime(6))  # 13
print(test.nth_prime(10001))  # 104743
