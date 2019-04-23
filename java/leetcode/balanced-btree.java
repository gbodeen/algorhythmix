/*
Given a binary tree, determine if it is height-balanced. For this problem, 
a height-balanced binary tree is defined as: a binary tree in which the depth 
of the two subtrees of every node never differ by more than 1.
*/

class Solution {
  public boolean isBalanced(TreeNode root) {
    if (root == null) {
      return true;
    }

    return isBalanced(root.left) && isBalanced(root.right)
        && Math.abs(treeDepth(root.left) - treeDepth(root.right)) <= 1;
  }

  public int treeDepth(TreeNode node) {
    if (node == null) {
      return 0;
    }

    return 1 + Math.max(treeDepth(node.left), treeDepth(node.right));
  }
}