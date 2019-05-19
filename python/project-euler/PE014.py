"""
The following iterative sequence is defined for the set of positive integers:

n -> n/2 (n is even)
n -> 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 
10 terms. Although it has not been proved yet (Collatz Problem), it is thought 
that all starting numbers finish at 1.
``
Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
"""


class PE014:
  def collatz(self, n):
    return (3 * n + 1) if (n % 2) else (n / 2)

  memos = {}

  def chain(self, n):
    if n == 1:
      return 1
    if n in self.memos:
      return self.memos[n]
    result = 1 + self.chain(self.collatz(n))
    self.memos[n] = result
    return result

  def max_chain(self, ceiling):
    max = 0
    initial = 0
    for i in range(1, ceiling):
      current = self.chain(i)
      if current > max:
        max = current
        initial = i
    return initial


# tests
test = PE014()
print(test.max_chain(2))  # 1
print(test.max_chain(10))  # 9
print(test.max_chain(100))  # 97
print(test.max_chain(1000000))  # 837799
