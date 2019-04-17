"""
Given an array where elements are sorted in ascending order, convert it to a
height balanced BST. For this problem, a height-balanced binary tree is
defined as a binary tree in which the depth of the two subtrees of every node
never differ by more than 1.
"""


class TreeNode:
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None


class Solution:
  def sortedArrayToBST(self, nums):
    if not len(nums):
      return None

    mid = len(nums) // 2
    root = TreeNode(nums[mid])
    root.left = self.sortedArrayToBST(nums[:mid])
    root.right = self.sortedArrayToBST(nums[mid+1:])
    return root
