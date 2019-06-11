# -*- coding: utf-8 -*-
"""
The nth term of the sequence of triangle numbers is given by, 
tn = ½n(n+1) so the first ten triangle numbers are:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding 
to its alphabetical position and adding these values we form 
a word value. For example, the word value for SKY is 19 + 11 
+ 25 = 55 = t10. If the word value is a triangle number then 
we shall call the word a triangle word.

Using words.txt, a 16K text file containing nearly 
two-thousand common English words, how many are triangle words?
"""


from math import sqrt


class PE042:
  def loadFile(self):
    with open('./data_for_algos/p042_words.txt', 'r') as file:
      self.words = file.read().replace('"', '').split(',')

  def isTriangularWord(self, w):
    sum = 0
    for c in w:
      sum += ord(c) - 64
    return sqrt(1 + 8 * sum) % 2 == 1

  def countTriangularWords(self):
    count = 0
    for word in self.words:
      if self.isTriangularWord(word):
        count += 1
    return count

  @staticmethod
  def main():
    test = PE042()
    test.loadFile()
    print(test.isTriangularWord('A'))  # true
    print(test.isTriangularWord('B'))  # false
    print(test.isTriangularWord('C'))  # true
    print(test.isTriangularWord('SKY'))  # true
    print(test.isTriangularWord('SKZ'))  # false
    print(test.countTriangularWords())  # 162


# test
PE042.main()
