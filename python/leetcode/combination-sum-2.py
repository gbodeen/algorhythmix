"""
Given a collection of candidate numbers (candidates) and a target
number (target), find all unique combinations in candidates where
the candidate numbers sums to target. Each number in candidates
may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
"""


class Solution:
  def combinationSum2(self, candidates, target):
    candidates.sort()
    combos = []

    def check_sums(start, target, path=[]):
      if target == 0:
        return combos.append(path)
      for i in range(start, len(candidates)):
        if i > start and candidates[i] == candidates[i - 1]:
          continue
        if target - candidates[i] >= 0:
          check_sums(i + 1, target - candidates[i], path + [candidates[i]])

    check_sums(0, target)
    return combos
