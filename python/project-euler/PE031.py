# -*- coding: utf-8 -*-
"""
In England the currency is made up of pound, £, and pence, p,
and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
"""


class PE031:
  def countChangeWays(self, n=200):
    coins = [2, 5, 10, 20, 50, 100, 200]
    results = [1 for i in range(n + 1)]
    for c in coins:
      for p in range(n + 1):
        results[p] += results[p - c] if p >= c else 0
    return results[n]

  @staticmethod
  def main():
    test = PE031()
    print(test.countChangeWays(1))  # 1
    print(test.countChangeWays(2))  # 2
    print(test.countChangeWays(3))  # 2
    print(test.countChangeWays(4))  # 3
    print(test.countChangeWays(5))  # 4
    print(test.countChangeWays(10))  # 11
    print(test.countChangeWays(200))  # 73682


# tests
PE031.main()
