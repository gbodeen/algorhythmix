/*
Given two binary trees, write a function to check 
if they are the same or not.

Two binary trees are considered the same if they 
are structurally identical and the nodes have the 
same value.
*/

// var isSameTree = function (p, q) {
//   if (!p && !q) return true;
//   if (!p || !q) return false;
//   if (p.val !== q.val) return false;
//   if (p.left || q.left || p.right || q.right) {
//     return isSameTree(p.left, q.left) &&
//       isSameTree(p.right, q.right);
//   }
//   return true;
// };

var isSameTree = function (p, q) {
  // base cases
  if (!p && !q) return true; // two null "trees"
  if (!p || !q) return false; // one null "tree"
  if (p.val !== q.val) return false;

  // recursive cases
  if (p.left || q.left || p.right || q.right) {
    return isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right);
  }
  // final base case
  return true;
};

// tests
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let p = new TreeNode(1); p.left = new TreeNode(2);
let q = new TreeNode(1); q.right = new TreeNode(2);
console.log(isSameTree(p, q)); // false

p = q = null;
console.log(isSameTree(p, q)); // true

p = new TreeNode(1); p.left = new TreeNode(2);
q = null;
console.log(isSameTree(p, q)); // false

p = new TreeNode(1); p.left = new TreeNode(2); p.left.left = new TreeNode(3);
p.left.right = new TreeNode(4); p.right = new TreeNode(5); p.right.left = new TreeNode(6);
p.right.right = new TreeNode(7); p.left.right.left = new TreeNode(8);
p.right.right.right = new TreeNode(9); p.right.right.right.right = new TreeNode(10);
q = new TreeNode(1); q.left = new TreeNode(2); q.left.left = new TreeNode(3);
q.left.right = new TreeNode(4); q.right = new TreeNode(5); q.right.left = new TreeNode(6);
q.right.right = new TreeNode(7); q.left.right.left = new TreeNode(8);
q.right.right.right = new TreeNode(9); q.right.right.right.right = new TreeNode(10);
console.log(isSameTree(p, q)); // true 

p = new TreeNode(1); p.left = new TreeNode(2); p.left.left = new TreeNode(3);
p.left.right = new TreeNode(4); p.right = new TreeNode(5); p.right.left = new TreeNode(6);
p.right.right = new TreeNode(7); p.left.right.left = new TreeNode(8);
p.right.right.right = new TreeNode(9); p.right.right.right.right = new TreeNode(10);
q = new TreeNode(1); q.left = new TreeNode(2); q.left.left = new TreeNode(3);
q.left.right = new TreeNode(4); q.right = new TreeNode(5); q.right.left = new TreeNode(6);
q.right.right = new TreeNode(7); q.left.right.left = new TreeNode(8);
q.right.right.left = new TreeNode(9); q.right.right.left.right = new TreeNode(10);
console.log(isSameTree(p, q)); // false 