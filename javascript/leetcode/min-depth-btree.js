/*
Given a binary tree, find its minimum depth. The minimum depth 
is the number of nodes along the shortest path from the root 
node down to the nearest leaf node.

Note: A leaf is a node with no children.
*/

var minDepth = function (root, stack = [], depth = 1) {
  if (!root) return depth - 1;
  if (!root.left && !root.right) return depth;
  if (root.left) stack.push([root.left, depth + 1]);
  if (root.right) stack.push([root.right, depth + 1]);
  let [nextroot, nextdepth] = stack.shift();
  return minDepth(nextroot, stack, nextdepth);
};
// time complexity: O(N) for N nodes, worst case
// space complexity: also O(N)


// tests
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let root = null;
console.log(minDepth(root)); // 0

root = new TreeNode(1);
console.log(minDepth(root)); // 1

root = new TreeNode(1);
root.left = new TreeNode(2);
console.log(minDepth(root)); // 2

root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
console.log(minDepth(root)); // 3

root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(4);
console.log(minDepth(root)); // 4

root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(4);
root.right = new TreeNode(5);
console.log(minDepth(root)); // 2

root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(4);
root.right = new TreeNode(5);
root.right.right = new TreeNode(6);
console.log(minDepth(root)); // 3

root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(4);
root.right = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left = new TreeNode(7);
console.log(minDepth(root)); // 3