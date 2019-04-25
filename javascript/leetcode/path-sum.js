/*
Given a binary tree and a sum, determine if the tree has a 
root-to-leaf path such that adding up all the values along 
the path equals the given sum. A leaf is a node with no 
children.
*/

var hasPathSum = function (root, sum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === sum;
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};
// time & space complexity: O(N) for N nodes
// strategy: recursive - depth-first search of tree


// tests
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var A = null;
console.log(hasPathSum(A, 0)); // true? nope, they want false
A = new TreeNode(1);
console.log(hasPathSum(A, 0)); // false
console.log(hasPathSum(A, 1)); // true
A.left = new TreeNode(2);
console.log(hasPathSum(A, 1)); // false
A.left = new TreeNode(-1);
console.log(hasPathSum(A, 0)); // true
console.log(hasPathSum(A, 1)); // true
A.right = new TreeNode(3);
console.log(hasPathSum(A, 0)); // true
console.log(hasPathSum(A, 1)); // false
console.log(hasPathSum(A, 3)); // false
console.log(hasPathSum(A, 4)); // true
A.left.left = new TreeNode(0);
A.left.right = new TreeNode(7);
A.right.left = new TreeNode(11);
A.right.right = new TreeNode(-17);
console.log(hasPathSum(A, 0)); // true
console.log(hasPathSum(A, -13)); // true
console.log(hasPathSum(A, 13)); // false