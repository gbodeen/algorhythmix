# -*- coding: utf-8 -*-
"""
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
"""


import math


class PE025:
  def next_fibonnaci(self):
    a, b = 1, 1
    yield a
    yield b
    while True:
      a, b = b, a + b
      yield b

  def count_digits(self, n):
    return int(math.log10(n)) + 1

  def first_to_n_digits(self, n):
    fibgen = self.next_fibonnaci()
    i = 1
    while True:
      fib = next(fibgen)
      if self.count_digits(fib) >= n:
        return i
      i += 1


# tests
test = PE025()
# fibgen = test.next_fibonnaci()
# for i in range(20):
#   print(i, next(fibgen))
# print(test.count_digits(100))
# print(test.count_digits(200))
# print(test.count_digits(1000))
# print(test.count_digits(5000))
print(test.first_to_n_digits(3))
print(test.first_to_n_digits(1000))
