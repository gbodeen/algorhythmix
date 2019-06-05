"""
The number 3797 has an interesting property. Being prime 
itself, it is possible to continuously remove digits from 
left to right, and remain prime at each stage: 3797, 797, 
97, and 7. Similarly we can work from right to left: 3797, 
379, 37, and 3.

Find the sum of the only eleven primes that are both 
truncatable from left to right and right to left. NOTE: 2, 
3, 5, and 7 are not considered to be truncatable primes.
"""


import math


class PE037:
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

  def all_truncations(self, s):
    truncs = [s]
    for i in range(1, len(s)):
      truncs.insert(0, s[i:])
      truncs.insert(0, s[:len(s)-i])
    return truncs

  def is_truncatable_prime(self, n):
    if n < 8:
      return False
    truncs = self.all_truncations(str(n))
    for numStr in truncs:
      if not self.is_prime(int(numStr)):
        return False
    return True

  def truncatable_primes(self):
    tps = []
    for i in range(11, 1000000, 2):
      if self.is_truncatable_prime(i):
        tps.append(i)
    return tps

  @staticmethod
  def main():
    test = PE037()
    print(test.all_truncations('3797'))
    print(test.is_truncatable_prime(3797))  # true
    print(test.is_truncatable_prime(7))  # false
    print(test.is_truncatable_prime(23))  # true
    print(test.is_truncatable_prime(41))  # false
    print(test.truncatable_primes())
    print(sum(test.truncatable_primes()))  # 748317


# test
PE037.main()
