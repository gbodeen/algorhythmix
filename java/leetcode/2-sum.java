
/*
Given an array of integers, return indices of the two numbers such 
that they add up to a specific target. You may assume that each input 
would have exactly one solution, and you may not use the same element 
twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

import java.util.HashMap;

class Solution {
  public int[] twoSum(int[] nums, int target) {
    HashMap<Integer, Integer> map = new HashMap<>();
    int num;

    for (int i = 0; i < nums.length; i++) {
      num = nums[i];
      if (map.get(num) != null) {
        int[] result = { map.get(num), i };
        return result;
      }
      map.put(target - num, i);
    }

    int[] fail = { -1, -1 };
    return fail;
  }
}
