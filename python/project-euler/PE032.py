# -*- coding: utf-8 -*-
"""
We shall say that an n-digit number is pandigital if it
makes use of all the digits 1 to n exactly once; for
example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254,
containing multiplicand, multiplier, and product is 1 through
9 pandigital.

Find the sum of all products whose multiplicand/multiplier/
product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so
be sure to only include it once in your sum.
"""


import math


class PE032:
  def isPandigital(self, a, b, c):
    word = str(a) + str(b) + str(c)
    if len(word) != 9:
      return False
    for i in range(1, 10):
      if word.find(str(i)) < 0:
        return False
    return True

  def isPartialPandigital(self, n):
    s = str(n)
    if s.find('0') >= 0:
      return False
    return len(s) == len(set(s))

  def findPandigitals(self):
    aMax = 9876
    results = set()
    sum = 0
    for a in range(1, aMax + 1):
      if not self.isPartialPandigital(a):
        continue
      aDigits = math.floor(math.log10(a)) + 1
      bMin = int(10 ** (math.floor((9 - aDigits) / 2) - 1))
      bMax = int(10 ** (math.ceil((9 - aDigits) / 2)))
      for b in range(bMin, bMax):
        product = a * b
        if product > aMax or product > bMax:
          break
        if product not in results and self.isPandigital(a, b, product):
          results.add(product)
          sum += product
    return sum

  @staticmethod
  def main():
    test = PE032()
    print(test.isPandigital(39, 186, 7254))  # true
    print(test.isPandigital(1, 2, 3456783))  # false
    print(test.isPartialPandigital(9876))  # true
    print(test.isPartialPandigital(445))  # false
    print(test.findPandigitals())  # 45228


# test
PE032.main()
