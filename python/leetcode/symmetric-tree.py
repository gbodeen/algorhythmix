# Given a binary tree, check whether it is a mirror of itself
# (ie, symmetric around its center).
# For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

#     1
#    / \
#   2   2
#  / \ / \
# 3  4 4  3

# But the following [1,2,2,null,3,null,3] is not:
#     1
#    / \
#   2   2
#    \   \
#    3    3


class TreeNode:
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None


class Solution:
  def isSymmetric(self, root: TreeNode) -> bool:
    if not root:
      return True

    def compare(x, y):
      if not x and not y:
        return True
      if not x or not y or (x.val != y.val):
        return False
      return compare(x.left, y.right) and compare(x.right, y.left)

    return compare(root.left, root.right)
