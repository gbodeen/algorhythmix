# -*- coding: utf-8 -*-
"""
Starting with the number 1 and moving to the right in a clockwise 
direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals 
is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 
spiral formed in the same way?
"""


class PE028:
  def diagonal_sum(self, n):
    if n == 1:
      return 1
    sum = 1
    for i in range(1, n):
      sum += 4 * (4 * i * i + i + 1)
    return sum


# tests
test = PE028()
print(test.diagonal_sum(1))  # 1
print(test.diagonal_sum(2))  # 25
print(test.diagonal_sum(3))  # 101
print(test.diagonal_sum(4))  # 261
print(test.diagonal_sum(501))  # 669171001
