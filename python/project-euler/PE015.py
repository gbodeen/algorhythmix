"""
Starting in the top left corner of a 2x2 grid, and only being able 
to move to the right and down, there are exactly 6 routes to the 
bottom right corner.

How many such routes are there through a 20x20 grid?
"""


class PE015:
  def count_paths(self, n):
    nodes = []
    for r in range(n + 1):
      nodes.append([])
      for c in range(n + 1):
        top = nodes[r-1][c] if r > 0 else 0
        left = nodes[r][c - 1] if c > 0 else 0
        total = top + left
        nodes[r] += [total] if total > 0 else [1]
    return nodes[n][n]


test = PE015()
print(test.count_paths(2))  # 6
print(test.count_paths(20))  # 137846528820
