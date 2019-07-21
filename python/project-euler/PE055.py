# -*- coding: utf-8 -*-
"""
If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.

Not all numbers produce palindromes so quickly. For example,

349 + 943 = 1292,
1292 + 2921 = 4213
4213 + 3124 = 7337

That is, 349 took three iterations to arrive at a palindrome.

Although no one has proved it yet, it is thought that some numbers, like 
196, never produce a palindrome. A number that never forms a palindrome 
through the reverse and add process is called a Lychrel number. Due to 
the theoretical nature of these numbers, and for the purpose of this 
problem, we shall assume that a number is Lychrel until proven otherwise. 
In addition you are given that for every number below ten-thousand, it will 
either (i) become a palindrome in less than fifty iterations, or, (ii) no 
one, with all the computing power that exists, has managed so far to map it 
to a palindrome. In fact, 10677 is the first number to be shown to require 
over fifty iterations before producing a palindrome: 
4668731596684224866951378664 (53 iterations, 28-digits).

Surprisingly, there are palindromic numbers that are themselves Lychrel 
numbers; the first example is 4994.

How many Lychrel numbers are there below ten-thousand?
"""


class PE055:
  def isLychrel(self, n):
    next = n
    for i in range(50):
      next += int(self.reverse(next))
      if self.isPalindrome(next):
        return False
    return True

  def countLychrels(self):
    count = 0
    for i in range(1, 10000):
      if self.isLychrel(i):
        count += 1
    return count

  def reverse(self, n):
    return str(n)[::-1]

  def isPalindrome(self, n):
    return str(n) == self.reverse(n)

  @staticmethod
  def main():
    test = PE055()
    print(test.isLychrel(47))  # False
    print(test.isLychrel(196))  # True
    print(test.isLychrel(349))  # False
    print(test.countLychrels())  # 249


# test
PE055.main()
