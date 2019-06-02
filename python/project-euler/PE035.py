"""
The number, 197, is called a circular prime because 
all rotations of the digits: 197, 971, and 719, are 
themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 
11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?
"""

import math


class PE035:
  def isPrime(self, n):
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

  def allRotations(self, s):
    rots = [s]
    for i in range(1, len(s)):
      rots.append(s[i:] + s[0:i])
    return rots

  def isCircularPrime(self, n):
    numStrs = self.allRotations(str(n))
    for numStr in numStrs:
      num = int(numStr)
      if not self.isPrime(num):
        return False
    return True

  def countCircularPrimes(self, limit):
    count = 0
    if self.isCircularPrime(2):
      count += 1
    for i in range(3, limit, 2):
      if self.isCircularPrime(i):
        count += 1
    return count

  @staticmethod
  def main():
    test = PE035()
    print(test.allRotations('1'))
    print(test.allRotations('12'))
    print(test.allRotations('123'))
    print(test.allRotations('1234'))
    print(test.allRotations('12345'))
    print(test.allRotations('123456'))
    print(test.isCircularPrime(2))  # true
    print(test.isCircularPrime(9))  # false
    print(test.isCircularPrime(13))  # true
    print(test.isCircularPrime(17))  # true
    print(test.isCircularPrime(23))  # false
    print(test.isCircularPrime(73))  # true
    print(test.countCircularPrimes(100))  # 13
    print(test.countCircularPrimes(1000000))  # 55


# test
PE035.main()
