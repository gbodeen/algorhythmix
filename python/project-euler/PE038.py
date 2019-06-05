# -*- coding: utf-8 -*-
"""
Take the number 192 and multiply it by each of 1, 2, and 3:
192 × 1 = 192
192 × 2 = 384
192 × 3 = 576

By concatenating each product we get the 1 to 9 pandigital, 
192384576. We will call 192384576 the concatenated product 
of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying 
by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which 
is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that 
can be formed as the concatenated product of an integer 
with (1,2, ... , n) where n > 1?
"""


class PE038:
  def is_pandigital(self, s):
    if len(s) != 9:
      return False
    for i in range(1, 10):
      if str(i) not in s:
        return False
    return True

  def pandigital_products(self):
    max = 0
    for n in range(1, 98766):
      word = str(n)
      j = 2
      while len(word) < 9:
        word += str(n * j)
        j += 1
      if self.is_pandigital(word) and int(word) > max:
        max = int(word)
    return max

  @staticmethod
  def main():
    test = PE038()
    print(test.is_pandigital('192384576'))  # true
    print(test.is_pandigital('192384570'))  # false
    print(test.pandigital_products())  # 932718654


# test
PE038.main()
