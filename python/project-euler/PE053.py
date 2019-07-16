# -*- coding: utf-8 -*-
"""
There are exactly ten ways of selecting three from five, 12345:

123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

In combinatorics, we use the notation, 5C3=10.

In general, nCr=n!/r!(n−r)!, where r≤n, n!=n×(n−1)×...×3×2×1, and 0!=1.

It is not until n=23, that a value exceeds one-million: 23C10=1144066.

How many, not necessarily distinct, values of nCr for 1≤n≤100, are 
greater than one-million?
"""

from math import factorial


class PE053:
  def isComboOverMillion(self, n, r):
    max = 1000000

    N = factorial(n)
    if N < max:
      return False

    R = factorial(r)
    if N / R < max:
      return False

    D = factorial(n - r)
    return (N / (R * D)) >= max

  def countBigCombos(self):
    count = 0
    for n in range(1, 101):
      for r in range(n + 1):
        if self.isComboOverMillion(n, r):
          count += 1
    return count

  @staticmethod
  def main():
    test = PE053()
    print(test.isComboOverMillion(23, 9))
    print(test.isComboOverMillion(23, 10))
    print(test.countBigCombos())  # 4075


# test
PE053.main()
