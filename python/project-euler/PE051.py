# -*- coding: utf-8 -*-
"""
By replacing the 1st digit of the 2-digit number *3, it turns 
out that six of the nine possible values: 13, 23, 43, 53, 73, 
and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, 
this 5-digit number is the first example having seven primes among 
the ten generated numbers, yielding the family: 56003, 56113, 
56333, 56443, 56663, 56773, and 56993. Consequently 56003, being 
the first member of this family, is the smallest prime with this 
property.

Find the smallest prime which, by replacing part of the number 
(not necessarily adjacent digits) with the same digit, is part 
of an eight prime value family.
"""


from math import sqrt


class PE051:
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
    n += 2 if (n % 2 == 1) else 1
    while not self.isPrime(n):
      n += 2
    return n

  def makeReplacements(self, n, mask):
    ns = str(n)
    replacements = []
    for d in range(0, 10):
      nsa = list(ns)
      bits = mask
      i = 0
      while (i < len(ns) and bits > 0):
        if bits % 2 == 1:
          nsa[i] = str(d)
        i += 1
        bits >>= 1
      if nsa[0] != '0':
        replacements.append(int(''.join(nsa)))
    return replacements

  def primeFamilySize(self, n, mask):
    family = self.makeReplacements(n, mask)
    if n not in family:
      return 0
    size = 0
    for member in family:
      if self.isPrime(member):
        size += 1
    return size

  def maxMask(self, n):
    return (2 ** len(str(n))) - 1

  def findPrimeFamily(self, size):
    n = 2
    mask = 1
    maxmask = self.maxMask(n)
    while self.primeFamilySize(n, mask) < size:
      if mask < maxmask:
        mask += 1
      else:
        n = self.nextPrime(n)
        mask = 1
        maxmask = self.maxMask(n)
    return n

  @staticmethod
  def main():
    test = PE051()
    print(test.makeReplacements(1, 1))
    print(test.makeReplacements(137, 2))
    print(test.makeReplacements(137, 5))
    print(test.nextPrime(0))  # 2
    print(test.nextPrime(2))  # 3
    print(test.nextPrime(3))  # 5
    print(test.nextPrime(20))  # 23
    print(test.nextPrime(31))  # 37
    print(test.primeFamilySize(13, 1))  # 6
    print(test.primeFamilySize(56003, 12))  # 7
    print(test.findPrimeFamily(2))  # 2
    print(test.findPrimeFamily(5))  # 11
    print(test.findPrimeFamily(6))  # 13
    print(test.findPrimeFamily(7))  # 56003
    print(test.findPrimeFamily(8))  # 121313


# test
PE051.main()
