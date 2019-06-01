"""
The fraction 49/98 is a curious fraction, as an inexperienced
mathematician in attempting to simplify it may incorrectly
believe that 49/98 = 4/8, which is correct, is obtained by
cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial
examples.

There are exactly four non-trivial examples of this type of
fraction, less than one in value, and containing two digits
in the numerator and denominator.

If the product of these four fractions is given in its lowest
common terms, find the value of the denominator.
"""


class PE033:
  def findCuriousFractions(self):
    results = []
    for n in range(10, 100):
      for d in range(10, 100):
        if n >= d:
          continue
        if self.digitsCancel(n, d):
          results.append(str(n) + '/' + str(d))
    return results

  def digitsCancel(self, n, d):
    ns = str(n)
    ds = str(d)
    for i in range(1, 10):
      if ns.find(str(i)) >= 0 and ds.find(str(i)) >= 0:
        ni = int(ns.replace(str(i), '', 1))
        di = int(ds.replace(str(i), '', 1))
        if ni * d == n * di:
          return True
    return False

  def solution(self):
    fraction_parts = [x.split('/') for x in self.findCuriousFractions()]
    fractions = [float(fraction[0])/float(fraction[1])
                 for fraction in fraction_parts]
    prod = 1
    for n in fractions:
      prod *= n
    return 1/prod

  @staticmethod
  def main():
    test = PE033()
    print(test.digitsCancel(49, 98))  # true
    print(test.digitsCancel(30, 50))  # false
    print(test.digitsCancel(32, 64))  # false
    print(test.digitsCancel(36, 63))  # false
    print(test.findCuriousFractions())
    print(test.solution())  # 100


# test
PE033.main()
