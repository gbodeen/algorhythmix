"""
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 2^1000?
"""


class PE016:
  def digit_sum(self, s):
    s = str(s)
    sum = 0
    for c in s:
      sum += int(c)
    return sum


# tests
test = PE016()
print(test.digit_sum(2 ** 15))  # 26
print(test.digit_sum(2 ** 1000))  # 1366
