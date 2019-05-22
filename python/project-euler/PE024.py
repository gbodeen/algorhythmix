"""
A permutation is an ordered arrangement of objects. For example, 
3124 is one possible permutation of the digits 1, 2, 3 and 4. If 
all of the permutations are listed numerically or alphabetically, 
we call it lexicographic order. The lexicographic permutations of 
0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 
1, 2, 3, 4, 5, 6, 7, 8 and 9?
"""

import math


class PE024:
  def digit_permute(self, n):
    permute = ''
    vals = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}
    for place in range(9, -1, -1):
      for digit in range(9, -1, -1):
        if vals[digit] < 0:
          continue
        if vals[digit] * math.factorial(place) < n:
          n -= vals[digit] * math.factorial(place)
          permute += str(digit)
          vals[digit] = -1
          for i in range(digit + 1, 10):
            vals[i] -= 1
          break
    return permute


# tests
test = PE024()
for i in range(1, 10):
  print(test.digit_permute(i))
print(test.digit_permute(1000000))  # 2783915460
