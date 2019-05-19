# -*- coding: utf-8 -*-
"""
Using names.txt, a 46K text file containing over five-thousand first names, 
begin by sorting it into alphabetical order. Then working out the alphabetical 
value for each name, multiply this value by its alphabetical position in the 
list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is 
worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would 
obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
"""


class PE022:
  def load_file(self):
    with open('./data_for_algos/p022_names.txt', 'r') as file:
      self.names = file.read().replace('"', '').split(',')
      self.names.sort()

  def alpha_value(self, word):
    return sum([ord(c) - 64 for c in word])

  def totalOfNameValues(self):
    total = 0
    for i, name in enumerate(self.names):
      total += self.alpha_value(name) * (i + 1)
    return total


# tests
test = PE022()
test.load_file()
# print(test.names)
print(test.names[937])  # 'COLIN'
print(test.alpha_value('COLIN'))  # 53
print(test.totalOfNameValues())  # 871198282
