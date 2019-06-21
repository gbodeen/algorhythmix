# -*- coding: utf-8 -*-
"""
Triangle, pentagonal, and hexagonal numbers are generated 
by the following formulae:

Triangle	 	Tn=n(n+1)/2	 	1, 3, 6, 10, 15, ...
Pentagonal	 	Pn=n(3n−1)/2	 	1, 5, 12, 22, 35, ...
Hexagonal	 	Hn=n(2n−1)	 	1, 6, 15, 28, 45, ...
It can be verified that T285 = P165 = H143 = 40755.

Find the next triangle number that is also pentagonal and 
hexagonal.
"""


from math import sqrt


class PE045:
  def triangular(self, n):
    return n * (n + 1) / 2

  def isPentagonal(self, n):
    return (1 + sqrt(1 + 24 * n)) % 6 == 0

  def isHexagonal(self, n):
    return (1 + sqrt(1 + 8 * n)) % 4 == 0

  def next356(self, n=286):
    tri = self.triangular(n)
    while not self.isPentagonal(tri) or not self.isHexagonal(tri):
      n += 1
      tri = self.triangular(n)
    return tri

  @staticmethod
  def main():
    test = PE045()
    print(test.isHexagonal(1))  # true
    print(test.isHexagonal(2))  # false
    print(test.isHexagonal(6))  # true
    print(test.isHexagonal(14))  # false
    print(test.isHexagonal(15))  # true
    print(test.isHexagonal(45))  # true
    print(test.isHexagonal(46))  # false
    print(test.triangular(285))  # 40755
    print(test.isPentagonal(40755))  # true
    print(test.isHexagonal(40755))  # true
    print(test.next356(2))  # 40755
    print(test.next356())  # 1533776805


# test
PE045.main()
