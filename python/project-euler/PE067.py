# -*- coding: utf-8 -*-
"""
Find the maximum total from top to bottom of the triangle below.
"""


class PE067:
  def load_file(self):
    with open('./data_for_algos/p067_triangle.txt', 'r') as file:
      self.lines = file.read().split('\n')
      self.lines.pop()
      self.nums = [[int(n) for n in row.split(' ')] for row in self.lines]

  def max_pyramid_path(self):
    pyramid = self.nums
    for r in range(len(pyramid) - 2, -1, -1):
      for c in range(r+1):
        pyramid[r][c] += max(pyramid[r+1][c], pyramid[r+1][c+1])
    return pyramid[0][0]

  @staticmethod
  def main():
    test = PE067()
    test.load_file()
    print(len(test.lines))
    for i in range(10):
      print(test.lines[i])
    print(len(test.nums))
    for i in range(10):
      print(test.nums[i])
    print(test.max_pyramid_path())  # 7273


PE067.main()
