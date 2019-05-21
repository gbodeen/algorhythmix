"""
A perfect number is a number for which the sum of its proper divisors is 
exactly equal to the number. For example, the sum of the proper divisors 
of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect 
number.

A number n is called deficient if the sum of its proper divisors is less 
than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the 
smallest number that can be written as the sum of two abundant numbers is 
24. By mathematical analysis, it can be shown that all integers greater 
than 28123 can be written as the sum of two abundant numbers. However, 
this upper limit cannot be reduced any further by analysis even though it 
is known that the greatest number that cannot be expressed as the sum of 
two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the 
sum of two abundant numbers.
"""


import math


class PE023:
  limit = 28123

  def sum_of_divisors(self, n):
    sum = -n
    sqrtN = int(math.ceil(math.sqrt(n)))
    for i in range(1, sqrtN):
      if n % i == 0:
        sum += i + (n / i)
    if sqrtN * sqrtN == n:
      sum += sqrtN
    return sum

  def is_abundant(self, n):
    return self.sum_of_divisors(n) > n

  def findAbundants(self):
    self.abundants = [self.is_abundant(i) for i in range(self.limit + 1)]

  def is_sum_of_2_abundants(self, n):
    if not hasattr(self, 'abundants'):
      self.findAbundants()
    for i in range(1, self.limit + 1):
      if self.abundants[i] and n - i > 0 and self.abundants[n - i]:
        return True
    return False

  def unabundance(self):
    sum = 0
    for i in range(1, self.limit + 1):
      if not self.is_sum_of_2_abundants(i):
        sum += i
    return sum


# tests
test = PE023()
for i in range(31):
  print(i, test.is_abundant(i), test.sum_of_divisors(i))
print("Result:  ", test.unabundance())  # 4179871
