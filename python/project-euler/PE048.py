# -*- coding: utf-8 -*-
"""
The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 
1^1 + 2^2 + 3^3 + ... + 1000^1000.
"""


class PE048:
  def powmod(self, b, p, m):
    r = 1
    for i in range(p):
      r = (r * b) % m
    return r % m

  def selfPowSeries(self, end, mod):
    sum = 0
    for i in range(1, end + 1):
      sum += self.powmod(i, i, mod) % mod
    return sum % mod

  @staticmethod
  def main():
    test = PE048()
    print(test.powmod(4, 4, 10 ** 11))
    print(test.selfPowSeries(10, 10 ** 11))  # 10405071317
    print(test.selfPowSeries(1000, 10 ** 10))  # 9110846700


# test
PE048.main()
