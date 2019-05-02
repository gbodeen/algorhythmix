"""A palindromic number reads the same both ways. The largest palindrome 
made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers."""


class PE004:
  def is_palindrome(self, x):
    x = str(x)
    return x == x[::-1]

  def findMaxPalindromicProduct(self, start):
    max = 0
    for i in range(start, 0, -1):
      for j in range(start, i, -1):
        prod = i * j
        if prod > max and self.is_palindrome(prod):
          max = prod
    return max


test = PE004()
print(test.findMaxPalindromicProduct(99))  # 9009
print(test.findMaxPalindromicProduct(999))  # 906609
