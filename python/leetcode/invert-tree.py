"""
Given a binary tree, return the bottom-up level order traversal of its nodes'
values. (ie, from left to right, level by level from leaf to root).
"""

# This was my first try:
# class Solution:
#   def levelOrderBottom(self, root: TreeNode, levels=None, depth=1) -> List[List[int]]:
#     if not levels:
#       levels = []
#     if not root:
#       return levels
#     if (len(levels) < depth):
#       levels.insert(0, [])
#     levels[len(levels) - depth].append(root.val)
#     self.levelOrderBottom(root.left, levels, depth + 1)
#     self.levelOrderBottom(root.right, levels, depth + 1)
#     return levels


# This one is a bit more idiomatic, and uses a while loop instead of recursion
class Solution:
  def levelOrderBottom(self, root):
    if not root:
      return []
    levels = []
    current_level = [root]

    while (len(current_level)):
      levels.insert(0, [node.val for node in current_level])
      current_level = [child for node in current_level for child in (
        node.left, node.right) if child]

    return levels
