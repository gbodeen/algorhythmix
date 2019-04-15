/*
Given a binary tree, return the bottom-up level order traversal of 
its nodes' values. (ie, from left to right, level by level from 
leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
*/

var levelOrderBottom = function (root, levels = [], depth = 1) {
  if (!root) return levels;
  if (levels.length < depth) levels.unshift([]);
  levels[levels.length - depth].push(root.val);
  levelOrderBottom(root.left, levels, depth + 1);
  levelOrderBottom(root.right, levels, depth + 1);
  return levels;
};


// tests
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var A = null;
console.log(levelOrderBottom(A)); // []
A = new TreeNode(1);
console.log(levelOrderBottom(A)); // [[1]]
A.right = new TreeNode(3);
console.log(levelOrderBottom(A)); // [[3],[1]]
A.right.left = new TreeNode(6);
console.log(levelOrderBottom(A)); // [[6],[3],[1]]
A.left = new TreeNode(2);
console.log(levelOrderBottom(A)); // [[6],[2,3],[1]]
A.left.left = new TreeNode(4);
console.log(levelOrderBottom(A)); // [[4,6],[2,3],[1]]
A.left.right = new TreeNode(5);
console.log(levelOrderBottom(A)); // [[4,5,6],[2,3],[1]]
A.left.right.right = new TreeNode(11);
console.log(levelOrderBottom(A)); // [[11],[4,5,6],[2,3],[1]]