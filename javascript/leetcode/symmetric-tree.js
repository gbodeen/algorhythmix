/*
Given a binary tree, check whether it is a mirror of itself 
(ie, symmetric around its center).
For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3

But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
*/

var isSymmetric = function (root) {
  if (!root) return true;

  const lefts = [], rights = [];
  let left = root.left, right = root.right;

  do {
    if ((!left && right) || (left && !right)) return false;

    if (left && right) {
      if (left.val !== right.val) return false;

      lefts.push(left.left);
      rights.push(right.right);
      lefts.push(left.right);
      rights.push(right.left);
    }

    left = lefts.shift();
    right = rights.shift();

  } while (left || right || lefts.length || rights.length);

  return true;
}
// time complexity: O(N) for N nodes in the tree
// space complexity: O(N) also due to the arrays

// tests
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var A = null;
console.log(isSymmetric(A)); // true
A = new TreeNode(1);
console.log(isSymmetric(A)); // true
A.left = new TreeNode(2);
console.log(isSymmetric(A)); // false
A.right = new TreeNode(3);
console.log(isSymmetric(A)); // false
A.right.val = 2;
console.log(isSymmetric(A)); // true
A.left.left = new TreeNode(3);
A.right.right = new TreeNode(3);
console.log(isSymmetric(A)); // true
A.right.right = null;
A.left.right = new TreeNode(3);
console.log(isSymmetric(A)); // false
A.left.right.val = 4;
A.right.left = new TreeNode(4);
A.right.right = new TreeNode(3);
console.log(isSymmetric(A)); // true;
A = new TreeNode(9);
A.left = new TreeNode(-42);
A.left.right = new TreeNode(76);
A.left.right.right = new TreeNode(13);
A.right = new TreeNode(-42);
A.right.left = new TreeNode(76);
A.right.left.right = new TreeNode(13);
console.log(isSymmetric(A)); // false
