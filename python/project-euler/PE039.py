# -*- coding: utf-8 -*-
"""
If p is the perimeter of a right angle triangle with integral
length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?
"""


import math


class PE039:
  def triangles(self, p):
    solutions = []
    for a in range(1, int(p / (2 + math.sqrt(2)))):
      for b in range(a, int((p - a) / 2) + 1):
        c = p - a - b
        if c == math.sqrt(a * a + b * b):
          solutions.append([a, b, c])
    return solutions

  def maxTriangles(self):
    max = 0
    for p in range(12, 1001):
      current = len(self.triangles(p))
      if current > max:
        max = current
        maxp = p
    return [max, maxp]

  @staticmethod
  def main():
    test = PE039()
    print(test.triangles(120))  # [[20,48,52], [24,45,51], [30,40,50]]
    print(test.maxTriangles())  # [8, 840]


# test
PE039.main()
