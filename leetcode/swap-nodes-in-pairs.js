/*
Given a linked list, swap every two adjacent nodes and return its head.

Example:
Given 1->2->3->4, you should return the list as 2->1->4->3.
*/

var swapPairs = function (head) {
  let A = head, B = A && A.next, prev = A;
  const outHead = B ? B : A;
  while (A && B) {
    // swap A & B's "next" properties
    A.next = B.next;
    B.next = A;
    // move on to next pair
    A = A.next;
    B = A && A.next;
    // reconnect to previous pair
    prev.next = B || A;
    prev = A;
  }
  return outHead;
};
// time complexity: O(n) for n nodes
// space complexity: O(1)


// tests
function ListNode(val) {
  this.val = val;
  this.next = null;
}
let A = null;
console.log(JSON.stringify(swapPairs(A))); // null
A = new ListNode(1);
console.log(JSON.stringify(swapPairs(A))); // 1
A.next = new ListNode(2);
console.log(JSON.stringify(swapPairs(A))); // 2,1
A = new ListNode(1);
A.next = new ListNode(2);
A.next.next = new ListNode(3);
console.log(JSON.stringify(swapPairs(A))); // 2,1,3
A = new ListNode(1);
A.next = new ListNode(2);
A.next.next = new ListNode(3);
A.next.next.next = new ListNode(4);
console.log(JSON.stringify(swapPairs(A))); // 2,1,4,3
A = new ListNode(1);
A.next = new ListNode(2);
A.next.next = new ListNode(3);
A.next.next.next = new ListNode(4);
A.next.next.next.next = new ListNode(5);
console.log(JSON.stringify(swapPairs(A)));