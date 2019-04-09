
/*
Given an array of integers nums sorted in ascending order, 
find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].
*/

import java.util.Arrays;

class Solution {

  public int[] searchRange(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;
    int first = left;
    int last = right;

    while (left <= right) {
      first = (left + right) >> 1;
      if (nums[first] == target && (first == 0 || nums[first - 1] != target)) {
        break;
      } else if (nums[first] >= target) {
        right = first - 1;
      } else {
        left = first + 1;
      }
    }

    left = first;
    right = nums.length - 1;
    while (left <= right) {
      last = (left + right) >> 1;
      if (nums[last] == target && (last == nums.length - 1 || nums[last + 1] != target)) {
        return new int[] { first, last };
      } else if (nums[last] <= target) {
        left = last + 1;
      } else {
        right = last - 1;
      }
    }

    return new int[] { -1, -1 };
  }

  public static void main(String[] args) {
    Solution x = new Solution();
    x.test();
  }

  public void test() {
    printArray(searchRange(new int[] {}, 0)); // {-1,-1}
    System.out.println("Should equal [-1. -1]");
    printArray(searchRange(new int[] { 1 }, 1)); // {0, 0}
    System.out.println("Should equal [0. 0]");
    printArray(searchRange(new int[] { 1 }, -4)); // {-1, -1}
    System.out.println("Should equal [-1. -1]");
    printArray(searchRange(new int[] { 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7 }, 1)); // {-1,-1}
    System.out.println("Should equal [-1. -1]");
    printArray(searchRange(new int[] { 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7 }, 9)); // {-1,-1}
    System.out.println("Should equal [-1. -1]");
    printArray(searchRange(new int[] { 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7 }, 2)); // {0,1}
    System.out.println("Should equal [0, 1]");
    printArray(searchRange(new int[] { 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7 }, 7)); // {9,10}
    System.out.println("Should equal [9, 10]");
    printArray(searchRange(new int[] { 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7 }, 5)); // {5,7}
    System.out.println("Should equal [5, 7]");
    printArray(searchRange(new int[] { 5, 7, 7, 8, 8, 10 }, 8)); // {3,4}
    System.out.println("Should equal [3, 4]");
    printArray(searchRange(new int[] { 5, 7, 7, 8, 8, 10 }, 6)); // {-1,-1}
    System.out.println("Should equal [-1. -1]");
    printArray(searchRange(new int[] { 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 }, 1)); // {0, 9}
    System.out.println("Should equal [0, 9]");
  }

  public void printArray(int[] arr) {
    System.out.println(Arrays.toString(arr));
  }
}