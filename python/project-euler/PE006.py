# The sum of the squares of the first ten natural numbers is
# 1^2 + 2^2 + ... + 10^2 = 385
#
# The square of the sum of the first ten natural numbers is
# (1 + 2 + ... + 10)^2 = 55^2 = 3025
#
# Hence the difference between the sum of the squares of the
# first ten natural numbers and the square of the sum
# is 3025 - 385 = 2640.
#
# Find the difference between the sum of the squares of the
# first one hundred natural numbers and the square of the sum.


class PE006:
  def sumOfSquares(self, max):
    sum = 0
    for i in range(1, max + 1):
      sum += i * i
    return sum

  def squareOfSum(self, max):
    sum = (max / 2) * (max + 1)
    return sum * sum

  def sos_difference(self, max):
    return self.squareOfSum(max) - self.sumOfSquares(max)


test = PE006()
print(test.sos_difference(10))  # 2640
print(test.sos_difference(100))  # 25164150
