"""
2520 is the smallest number that can be divided by 
each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly 
divisible by all of the numbers from 1 to 20?
"""


def gcd(a, b):
  while b:
    a, b = b, a % b
  return a


def lcm(a, b):
  return a / gcd(a, b) * b


def range_lcm(n):
  prod = 1
  for i in range(2, n + 1):
    prod = lcm(prod, i)
  return prod


print(range_lcm(10))  # 2520
print(range_lcm(20))  # 232792560
