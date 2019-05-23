"""
If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
"""


def PE001(n):
  sum = 0
  for num in range(1, n):
    sum += num if num % 3 == 0 or num % 5 == 0 else 0
  return sum


print(PE001(10))  # 23
print(PE001(1000))  # 233168
