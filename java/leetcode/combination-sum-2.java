/*
Given a collection of candidate numbers (candidates) and a target 
number (target), find all unique combinations in candidates where 
the candidate numbers sums to target. Each number in candidates 
may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
*/

class Solution {
  public List<List<Integer>> combinationSum2(int[] candidates, int target) {
    Arrays.sort(candidates);
    ArrayList combos = new ArrayList<>();
    findCombos(candidates, 0, target, new ArrayList<>(), combos);
    return combos;
  }

  public void findCombos(int[] nums, int start, int target, ArrayList list, ArrayList combos) {
    if (target == 0) {
      combos.add(list);
      return;
    }
    for (int i = start; i < nums.length; i++) {
      if (i > start && nums[i] == nums[i - 1]) {
        continue;
      }
      if (target - nums[i] >= 0) {
        ArrayList newList = new ArrayList<>(list);
        newList.add(nums[i]);
        findCombos(nums, i + 1, target - nums[i], newList, combos);
      }
    }
  }
}
