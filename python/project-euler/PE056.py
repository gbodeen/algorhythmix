"""
Considering natural numbers of the form, a ** b, where 
a, b < 100, what is the maximum digital sum?
"""


class PE056:
  def maxDigitSum(self):
    max = 0
    for a in range(2, 101):
      for b in range(2, 101):
        temp = self.digitSum(a ** b)
        if temp > max:
          max = temp
    return max

  def digitSum(self, n):
    return sum([int(s) for s in list(str(n))])

  @staticmethod
  def main():
    test = PE056()
    print(test.digitSum(456))
    print(test.maxDigitSum())  # 972


# test
PE056.main()
