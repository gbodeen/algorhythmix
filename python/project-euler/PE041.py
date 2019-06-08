"""
We shall say that an n-digit number is pandigital if it makes 
use of all the digits 1 to n exactly once. For example, 2143 
is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?
"""


from math import sqrt


class PE041:
  def isPandigital(self, n):
    if n > 987654321:
      return False
    s = str(n)
    for i in range(1, len(s) + 1):
      if str(i) not in s:
        return False
    return True

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

  def maxPandigitalPrime(self, max=987654321):
    for i in range(max, 0, -1):
      if self.isPandigital(i) and self.isPrime(i):
        return i
    return -1

  @staticmethod
  def main():
    test = PE041()
    print(test.isPandigital(2143))  # true
    print(test.isPandigital(987654321))  # true
    print(test.isPandigital(98654321))  # false
    print(test.isPandigital(1023))  # false
    print(test.maxPandigitalPrime(10000000))  # 7652413


# test
PE041.main()
