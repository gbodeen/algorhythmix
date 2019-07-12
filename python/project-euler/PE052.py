# -*- coding: utf-8 -*-
"""
It can be seen that the number, 125874, and its double, 251748, 
contain exactly the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, 
and 6x, contain the same digits.
"""


class PE052:
  def smallest6xPermutable(self):
    n = 123456
    while not self.is6xPermutable(n):
      n += 1
    return n

  def isPermutation(self, a, b):
    aa = sorted(str(a))
    bb = sorted(str(b))
    return aa == bb

  def is6xPermutable(self, n):
    return self.isPermutation(n, n * 2) and \
      self.isPermutation(n, n * 3) and \
      self.isPermutation(n, n * 4) and \
      self.isPermutation(n, n * 5) and \
      self.isPermutation(n, n * 6)

  @staticmethod
  def main():
    test = PE052()
    print(test.isPermutation(125874, 125874 * 2))
    print(test.isPermutation(125874, 125874 * 2 + 1))
    print(test.smallest6xPermutable())  # 142857


# test
PE052.main()
