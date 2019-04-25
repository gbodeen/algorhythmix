"""
Given a binary tree and a sum, determine if the tree has a 
root-to-leaf path such that adding up all the values along 
the path equals the given sum. A leaf is a node with no 
children.
"""


class TreeNode:
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None


class Solution:
  def hasPathSum(self, root: TreeNode, sum: int) -> bool:
    if not root:
      return False
    if (not root.left) and (not root.right):
      return root.val == sum
    return self.hasPathSum(root.left, sum - root.val) or \
      self.hasPathSum(root.right, sum - root.val)
