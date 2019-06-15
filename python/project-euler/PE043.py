"""
The number, 1406357289, is a 0 to 9 pandigital number because 
it is made up of each of the digits 0 to 9 in some order, but 
it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In 
this way, we note the following:

d2d3d4=406 is divisible by 2
d3d4d5=063 is divisible by 3
d4d5d6=635 is divisible by 5
d5d6d7=357 is divisible by 7
d6d7d8=572 is divisible by 11
d7d8d9=728 is divisible by 13
d8d9d10=289 is divisible by 17
Find the sum of all 0 to 9 pandigital numbers with this property.
"""


class PE043:
  def nextPermute(self, s):
    i = len(s) - 1
    while i > 0 and int(s[i-1]) >= int(s[i]):
      i -= 1
    s = s[0:i] + ''.join(sorted(s[i:]))
    if i == 0:
      return s
    j = i
    while j < len(s) and int(s[j]) <= int(s[i-1]):
      j += 1
    s = s[0:i-1] + s[j] + s[i:j] + s[i-1] + s[j+1:]
    return s

  def isSpecialDivisible(self, s):
    divisors = [2, 3, 5, 7, 11, 13, 17]
    for i in range(1, 8):
      if int(s[i:i+3]) % divisors[i-1]:
        return False
    return True

  def sumOfSpecials(self):
    sum = 0
    num = '1023456789'
    while int(num) < 9876543210:
      num = self.nextPermute(num)
      if self.isSpecialDivisible(num):
        sum += int(num)
    return sum

  @staticmethod
  def main():
    test = PE043()
    print(test.nextPermute('1023456789'))  # 1023456798
    print(test.nextPermute('1023456798'))  # 1203456879
    print(test.nextPermute('7630498521'))  # 7630512489
    print(test.nextPermute('9876543210'))  # 9876543210
    print(test.nextPermute('8976543210'))  # 9012345678
    print(test.isSpecialDivisible('1406357289'))  # true
    print(test.isSpecialDivisible('9876543210'))  # false
    print(test.isSpecialDivisible('1023456789'))  # false
    print(test.sumOfSpecials())  # 16695334890


# test
PE043.main()
