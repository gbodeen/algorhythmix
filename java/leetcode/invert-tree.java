/*
 * Given a binary tree, return the bottom-up level order traversal of its nodes'
 * values. (ie, from left to right, level by level from leaf to root).
 */

class Solution {
  public List<List<Integer>> levels = new ArrayList<>();

  public List<List<Integer>> levelOrderBottom(TreeNode root) {
    return levelOrderBottom(root, 1);
  }

  public List<List<Integer>> levelOrderBottom(TreeNode root, int depth) {
    if (root == null) {
      return levels;
    }
    if (levels.size() < depth) {
      levels.add(0, new ArrayList<Integer>());
    }
    levels.get(levels.size() - depth).add(root.val);
    levelOrderBottom(root.left, depth + 1);
    levelOrderBottom(root.right, depth + 1);
    return levels;
  }
}