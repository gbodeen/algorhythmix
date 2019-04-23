"""
Given a binary tree, determine if it is height-balanced. For this problem, 
a height-balanced binary tree is defined as: a binary tree in which the depth 
of the two subtrees of every node never differ by more than 1.
"""


class Solution:
  def isBalanced(self, root):
    if not root:
      return True

    return self.isBalanced(root.left) and self.isBalanced(root.right) \
      and abs(self.treeDepth(root.left) - self.treeDepth(root.right)) <= 1

  def treeDepth(self, node):
    if not node:
      return 0

    return 1 + max(self.treeDepth(node.left), self.treeDepth(node.right))
