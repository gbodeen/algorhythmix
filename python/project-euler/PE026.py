"""
Find the value of d < 1000 for which 1/d contains the 
longest recurring cycle in its decimal fraction part.
"""


class PE026:
  def dec_cycle_len(self, n):
    remainder = 10
    prevs = {}
    for i in range(1, n + 1):
      if remainder == 0:
        return 0
      if remainder in prevs:
        return i - prevs[remainder]
      prevs[remainder] = i
      remainder = 10 * (remainder % n)

  def max_cycle_under_n(self, n):
    max = 0
    for i in range(2, n):
      current = self.dec_cycle_len(i)
      if current > max:
        max = current
        maxIdx = i
    return maxIdx


# tests
test = PE026()
print(test.dec_cycle_len(3))  # 1
print(test.dec_cycle_len(7))  # 6
print(test.dec_cycle_len(16))  # 0
print(test.dec_cycle_len(36))  # 1
print(test.dec_cycle_len(38))  # 18
print(test.dec_cycle_len(39))  # 6
print(test.dec_cycle_len(44))  # 2
print(test.max_cycle_under_n(1000))  # 983
