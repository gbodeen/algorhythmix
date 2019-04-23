/*
Given a binary tree, determine if it is height-balanced. For this problem, 
a height-balanced binary tree is defined as: a binary tree in which the depth 
of the two subtrees of every node never differ by more than 1.

Example 1:
Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:
Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.
*/

var isBalanced = function (root) {
  if (!root) return true;
  return isBalanced(root.left) && isBalanced(root.right) &&
    Math.abs(treeDepth(root.left) - treeDepth(root.right)) <= 1;
};

function treeDepth(node) {
  if (!node) return 0;
  return 1 + Math.max(treeDepth(node.left), treeDepth(node.right));
}


// testing
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var A = null;
console.log(isBalanced(A)); // true
A = new TreeNode(1);
console.log(isBalanced(A)); // true
A.left = new TreeNode(2);
console.log(isBalanced(A)); // true
A.left.left = new TreeNode(4);
console.log(isBalanced(A)); // false
A.right = new TreeNode(3);
console.log(isBalanced(A)); // true
A.right.right = new TreeNode(7);
console.log(isBalanced(A)); // true