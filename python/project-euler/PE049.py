# -*- coding: utf-8 -*-
"""
The arithmetic sequence, 1487, 4817, 8147, in which each 
of the terms increases by 3330, is unusual in two ways: 
(i) each of the three terms are prime, and, (ii) each of 
the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, 
or 3-digit primes, exhibiting this property, but there is 
one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the 
three terms in this sequence?
"""


from math import sqrt


class PE049:
  def isPrime(self, n):
    if n < 2:
      return False
    if n == 2:
      return True
    if n % 2 == 0:
      return False
    for i in range(3, int(sqrt(n)) + 1, 2):
      if n % i == 0:
        return False
    return True

  def allPermutes(self, n):
    def permute(s):
      if len(s) <= 1:
        return [s]
      permutations = []
      for i in range(len(s)):
        substring = s[:i] + s[i+1:]
        subpermutes = [s[i] + el for el in permute(substring)]
        permutations.extend(subpermutes)
      return sorted(list(set(permutations)))

    return [int(s) for s in permute(''.join(sorted(str(n))))]

  def arithSeq3s(self, arr):
    seqs = []
    if len(arr) < 3:
      return seqs
    for i in range(len(arr) - 2):
      a = arr[i]
      for j in range(i + 1, len(arr) - 1):
        b = arr[j]
        for k in range(j + 1, len(arr)):
          c = arr[k]
          if b - a == c - b:
            seqs.append([a, b, c])
    return seqs

  def specialSeq(self):
    seqs = []
    for i in range(1111, 3800, 2):
      if '0' not in str(i) and self.isPrime(i):
        primes = [x for x in self.allPermutes(i) if self.isPrime(x)]
        primeSeqs = self.arithSeq3s(primes)
        if len(primeSeqs) > 0:
          seqs.extend(primeSeqs)
    return seqs

  @staticmethod
  def main():
    test = PE049()
    # print(test.allPermutes(0))
    # print(test.allPermutes(1))
    # print(test.allPermutes(23))
    # print(test.allPermutes(44))
    # print(test.allPermutes(567))
    # print(test.allPermutes(888))
    # print(test.allPermutes(9012))
    # print(test.allPermutes(3456))
    # print(test.allPermutes(7778))
    # print(test.allPermutes(9900))
    # print(test.allPermutes(1487))
    # print(test.arithSeq3s(test.allPermutes(1487)))
    print(test.specialSeq())  # 296962999629
    # print(test.isPrime(2969))
    # print(test.isPrime(6299))
    # print(test.isPrime(9629))
    # print([9629 - 6299, 6299 - 2969])


# test
PE049.main()
