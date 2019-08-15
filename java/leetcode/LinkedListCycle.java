/*
Given a linked list, determine if it has a cycle in it.
*/

public class LinkedListCycle {
  public boolean hasCycle(ListNode head) {
    ListNode a = head;
    if (a == null)
      return false;
    ListNode b = a.next;
    if (b == null)
      return false;

    while (a != b) {
      if (a == null)
        return false;
      a = a.next;
      if (b == null || b.next == null)
        return false;
      b = b.next.next;
    }

    return a == b;
  }

  public static void main(String[] args) {
    CycleChecker test = new CycleChecker();
    // tests
    ListNode A = null;
    System.out.println(test.hasCycle(A)); // false
    A = new ListNode(0);
    System.out.println(test.hasCycle(A)); // false
    ListNode temp = A;
    for (int i = 1; i <= 100; i++) {
      temp.next = new ListNode(i);
      temp = temp.next;
    }
    System.out.println(test.hasCycle(A)); // false
    temp.next = A.next.next.next.next;
    System.out.println(test.hasCycle(A)); // true
    A = new ListNode(0);
    A.next = A;
    System.out.println(test.hasCycle(A)); // true
  }
}

class ListNode {
  int val;
  ListNode next;

  ListNode(int x) {
    val = x;
    next = null;
  }
}