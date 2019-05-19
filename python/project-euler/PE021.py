# -*- coding: utf-8 -*-
"""
Let d(n) be defined as the sum of proper divisors of n 
(numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are 
an amicable pair and each of a and b are called amicable 
numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 
10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. 
The proper divisors of 284 are 1, 2, 4, 71 and 142; so 
d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
"""


import math


class PE021:
  def divisors(self, n):
    if n <= 1:
      return [n]
    divs = [1]
    sqrtN = int(math.sqrt(n))
    for i in range(2, sqrtN):
      if n % i == 0:
        L = (len(divs) + 1) / 2
        divs.insert(L, i)
        divs.insert(L + 1, n // i)
    if (sqrtN * sqrtN == n):
      L = (len(divs) + 1) / 2
      divs.insert(L, sqrtN)
    return divs

  def is_amicable(self, n):
    m = sum(self.divisors(n))
    return m != n and sum(self.divisors(m)) == n

  def main(self):
    sum = 0
    for i in range(10000):
      if self.is_amicable(i):
        sum += i
    return sum


# test
test = PE021()
print(test.main())  # 31626
