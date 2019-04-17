/*
 * Given an array where elements are sorted in ascending order, convert it to a
 * height balanced BST. For this problem, a height-balanced binary tree is
 * defined as a binary tree in which the depth of the two subtrees of every node
 * never differ by more than 1.
 */

class Solution {
  public TreeNode sortedArrayToBST(int[] nums) {
    return sortedArrayToBST(nums, 0, nums.length - 1);
  }

  public TreeNode sortedArrayToBST(int[] nums, int left, int right) {
    if (nums.length == 0 || left > right) {
      return null;
    }

    int mid = (left + right) >> 1;
    TreeNode root = new TreeNode(nums[mid]);
    root.left = mid > 0 ? sortedArrayToBST(nums, left, mid - 1) : null;
    root.right = sortedArrayToBST(nums, mid + 1, right);
    return root;
  }
}

public class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;

  TreeNode(int x) {
    val = x;
  }
}