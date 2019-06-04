"""
The decimal number, 585 = 1001001001 (binary), 
is palindromic in both bases.

Find the sum of all numbers, less than one million, 
which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either 
base, may not include leading zeros.)
"""


class PE036:
  def isPalindrome(self, s):
    return s == s[::-1]

  def isDoubleBasePalindrome(self, n):
    return self.isPalindrome(str(n)) and self.isPalindrome(bin(n)[2:])

  def sum2BasePals(self):
    sum = 0
    for i in range(1, 1000000, 2):
      if self.isDoubleBasePalindrome(i):
        sum += i
    return sum

  @staticmethod
  def main():
    test = PE036()
    print(test.isPalindrome('1'))  # true
    print(test.isPalindrome('22'))  # true
    print(test.isPalindrome('343'))  # true
    print(test.isPalindrome('5665'))  # true
    print(test.isPalindrome('7889887'))  # true
    print(test.isPalindrome('10'))  # false
    print(test.isPalindrome('345'))  # false
    print(test.isDoubleBasePalindrome(585))  # true
    print(test.isDoubleBasePalindrome(50))  # false
    print(test.sum2BasePals())  # 872187


# test
PE036.main()
