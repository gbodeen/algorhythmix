/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity
should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:
nums1 = [1, 3]
nums2 = [2]
The median is 2.0

Example 2:
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5
*/

// O(m+n) means we can iteratively merge the arrays till we reach the median.
var findMedianSortedArrays = function (nums1, nums2) {
  const L = nums1.length + nums2.length;
  const M = L >> 1;
  let x1 = x2 = 0;
  let n1, n2, mid, prev;
  for (let i = 0; i <= M; i++) {
    n1 = nums1[x1], n2 = nums2[x2];
    if (n1 === undefined) {
      n1 = Infinity;
    } else if (n2 === undefined) {
      n2 = Infinity;
    }
    prev = mid;
    mid = n1 <= n2 ? (x1++ , n1) : (x2++ , n2);
  }
  return L & 1 ? mid : (mid + prev) / 2;
};
// time complexity: O(m+n)
// space complexity: O(1) 

console.log(findMedianSortedArrays([], [1]) === 1);
console.log(findMedianSortedArrays([-1, 2, 3], []));
console.log(findMedianSortedArrays([-5], [5]));
console.log(findMedianSortedArrays([0], [0]));
console.log(findMedianSortedArrays([-1, 0, 1], [6, 7, 8]));
console.log(findMedianSortedArrays([0, 2, 4, 6, 8, 10], [1, 3, 5, 7, 9]));