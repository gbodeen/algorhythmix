/*
Given an array where elements are sorted in ascending order, convert 
it to a height balanced BST. For this problem, a height-balanced 
binary tree is defined as a binary tree in which the depth of the two 
subtrees of every node never differ by more than 1.

Example:
Given the sorted array: [-10,-3,0,5,9],
One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
      0
     / \
   -3   9
   /   /
 -10  5
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  let left = 0, right = nums.length - 1, mid = (left + right) >> 1;
  let root = left <= right ? new TreeNode(nums[mid]) : null;
  root.left = mid ? sortedArrayToBST(nums.slice(0, mid)) : null;
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
};
// time complexity: O(N) for N elements in array
// space complexity: O(N) also


// tests
console.log(sortedArrayToBST([])); // null
console.log(sortedArrayToBST([1])); // 1
console.log(sortedArrayToBST([1, 2])); // 
console.log(sortedArrayToBST([1, 2, 3])); // 
console.log(sortedArrayToBST([0, 1, 2, 3])); // 
console.log(sortedArrayToBST([-1, 0, 1, 2, 3])); // 
console.log(sortedArrayToBST([-2, -1, 0, 1, 2, 3])); // 
console.log(sortedArrayToBST([-2, -1, 0, 1, 2, 3, 4])); // 
console.log(sortedArrayToBST([-2, -1, 0, 1, 2, 3, 4, 5])); // 