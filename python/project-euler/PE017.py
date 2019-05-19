"""
If the numbers 1 to 5 are written out in words: one, two, three, 
four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used 
in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were 
written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three 
hundred and forty-two) contains 23 letters and 115 (one hundred 
and fifteen) contains 20 letters. The use of "and" when writing 
out numbers is in compliance with British usage.
"""


class PE017:
  def count_letters(self, s):
    return len(s.replace(' ', '').replace('-', ''))

  ones = ['', 'one', 'two', 'three', 'four',
          'five', 'six', 'seven', 'eight', 'nine']
  teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
           'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  tens = ['', '', 'twenty', 'thirty', 'forty',
          'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  def num_to_words(self, n):
    if n == 1000:
      return 'one thousand'
    name = ''
    if n >= 100:
      name += self.ones[n // 100] + ' hundred'
      if n % 100:
        name += ' and '
    if n % 100 >= 10 and n % 100 < 20:
      name += self.teens[n % 100 - 10]
      return name
    if n % 100 >= 20:
      name += self.tens[(n % 100) // 10]
      if n % 10:
        name += '-'
    name += self.ones[n % 10]
    return name

  def main(self):
    count = 0
    for i in range(1, 1001):
      count += self.count_letters(self.num_to_words(i))
    return count


# tests
test = PE017()
testVals = [1, 5, 9, 10, 12, 18, 20, 21, 88, 100, 104, 115, 240, 342, 1000]
for i in testVals:
  print(str(i) + ': ' + test.num_to_words(i))
print(test.count_letters(test.num_to_words(342)))  # 23
print(test.count_letters(test.num_to_words(115)))  # 20
print(test.main())  # 21124
