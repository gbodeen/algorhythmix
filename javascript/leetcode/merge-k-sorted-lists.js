/*
Merge k sorted linked lists and return it as one 
sorted list. Analyze and describe its complexity.
*/

var mergeKLists = function (lists) {
  if (lists.length === 0) return '';
  if (lists.every(x => !x)) return '';
  let idx = mindex(lists.map(head => head.val));
  let newlist = lists[idx];
  if (lists[idx].next) {
    lists[idx] = lists[idx].next;
  } else {
    lists.splice(idx, 1);
  }
  let node = newlist;
  while (lists.length) {
    idx = mindex(lists.map(head => head.val));
    node.next = lists[idx];
    node = node.next;
    if (lists[idx].next) {
      lists[idx] = lists[idx].next;
    } else {
      lists.splice(idx, 1);
    }
  }
  return newlist;
};

function mindex(list) {
  let min = Infinity, idx = -1;
  for (let i = 0; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
      idx = i;
    }
  }
  return idx;
}


// tests
function ListNode(val) {
  this.val = val;
  this.next = null;
}
let foo = new ListNode(1);
foo.next = new ListNode(3);
foo.next.next = new ListNode(5);
let bar = new ListNode(0);
console.log(mergeKLists([foo, bar]));

// [[1,4,5],[1,3,4],[2,6]]