/*
Given a linked list, remove the n-th node from the end of list 
and return its head.

Example:
Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:
Given n will always be valid.

Follow up:
Could you do this in one pass?
*/

var removeNthFromEnd = function (head, n) {
  if (n === 0) return head;
  const queue = [];
  let curr = head, next = curr && curr.next;
  do {
    queue.push(curr);
    if (queue.length > n + 1) queue.shift();
    curr = next;
    next = next && next.next;
  } while (curr);
  if (queue.length <= n) return queue[1] || null;
  queue[0].next = queue[2] || null;
  return head;
};
// time complexity: linear, and just one pass
// space complexity: O(n) due to the queue


// tests
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var A = null;
console.log(removeNthFromEnd(A, 0)); // null
A = new ListNode(1);
console.log(removeNthFromEnd(A, 0)); // A
console.log(removeNthFromEnd(A, 1)); // null
A = new ListNode(1);
A.next = new ListNode(2);
console.log(removeNthFromEnd(A, 1)); // 1
A = new ListNode(1);
A.next = new ListNode(2);
A.next.next = new ListNode(3);
console.log(removeNthFromEnd(A, 3)); // 2,3
A = new ListNode(1);
A.next = new ListNode(2);
A.next.next = new ListNode(3);
console.log(removeNthFromEnd(A, 2)); // 1,3
A = new ListNode(1);
A.next = new ListNode(2);
A.next.next = new ListNode(3);
console.log(removeNthFromEnd(A, 1)); // 1,2