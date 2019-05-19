# -*- coding: utf-8 -*-
"""
n! means n x (n − 1) x ... x 3 x 2 x 1
For example, 10! = 10 x 9 x ... x 3 x 2 x 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
Find the sum of the digits in the number 100!
"""


class PE020:
  def factorial(self, n):
    prod = 1
    for i in range(2, n + 1):
      prod *= i
    return prod

  def digit_sum(self, n):
    sum = 0
    while n > 0:
      sum += n % 10
      n = n // 10
    return sum


# tests
test = PE020()
print(test.digit_sum(test.factorial(10)))  # 27
print(test.digit_sum(test.factorial(100)))  # 648
