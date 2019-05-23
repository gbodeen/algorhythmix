"""
A Pythagorean triplet is a set of three natural numbers, a < b < c, 
for which, a2 + b2 = c2

For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
"""


class PE009:
  def main(self):
    for a in range(1, 334):
      for b in range(a + 1, 500):
        c = 1000 - a - b
        if c < b:
          break
        if a * a + b * b - c * c == 0:
          return a * b * c


test = PE009()
print(test.main())  # 31875000
