# -*- coding: utf-8 -*-
"""
An irrational decimal fraction is created by concatenating
the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find
the value of the following expression.

d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
"""


import math


class PE040:
  def champernowne(self, n):
    L = 0
    i = 1
    while L < n:
      L += int(math.log10(i)) + 1
      i += 1
    s = str(i - 1)
    offset = (len(s) - 1) - (L - n)
    return int(s[offset])

  def expression(self):
    return self.champernowne(1) * self.champernowne(10) * \
      self.champernowne(100) * self.champernowne(1000) * \
      self.champernowne(10000) * self.champernowne(100000) * \
      self.champernowne(1000000)

  @staticmethod
  def main():
    test = PE040()
    print(test.champernowne(1000))  # 3
    print(test.expression())  # 210


# test
PE040.main()
