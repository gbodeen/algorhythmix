"""
145 is a curious number, as 
1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to 
the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are 
not included.
"""


import math


class PE034:
  def digitFactSum(self, n):
    sum = 0
    while n > 0:
      rem = n % 10
      sum += math.factorial(rem)
      n = (n - rem) / 10
    return sum

  def findCuriousNums(self):
    sum = 0
    nums = []
    for i in range(10, 100000):
      if i == self.digitFactSum(i):
        sum += i
        nums.append(i)
    return sum

  @staticmethod
  def main():
    test = PE034()
    print(test.digitFactSum(10))  # 2
    print(test.digitFactSum(23))  # 8
    print(test.digitFactSum(456))  # 864
    print(test.findCuriousNums())  # 40730


# test
PE034.main()
