"""
Surprisingly there are only three numbers that can be 
written as the sum of fourth powers of their digits:

1634 = 1^4 + 6^4 + 3^4 + 4^4
8208 = 8^4 + 2^4 + 0^4 + 8^4
9474 = 9^4 + 4^4 + 7^4 + 4^4
As 1 = 1^4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as 
the sum of fifth powers of their digits.
"""


class PE030:
  def digitPowSum(self, n, p):
    sum = 0
    while n > 0:
      rem = n % 10
      sum += rem ** p
      n = (n - rem) / 10
    return sum

  def digitPowSumEqSelf(self, n, p):
    return n == self.digitPowSum(n, p)

  def searchNums(self, p):
    eqs = []
    for i in range(2, 10 ** (p + 1)):
      if self.digitPowSumEqSelf(i, p):
        eqs.append(i)
    return eqs

  @staticmethod
  def main():
    test = PE030()
    print(test.digitPowSum(777, 1))  # 21
    print(test.digitPowSum(777, 2))  # 147
    print(test.digitPowSumEqSelf(1634, 4))  # true
    print(test.searchNums(1))
    print(test.searchNums(2))
    print(test.searchNums(3))
    print(test.searchNums(4))
    print(test.searchNums(5))
    print(sum(test.searchNums(4)))  # 19316
    print(sum(test.searchNums(5)))  # 443839


# test
PE030.main()
