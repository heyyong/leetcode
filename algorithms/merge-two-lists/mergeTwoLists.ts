import { ListNode } from "@helper/ListNode";

export function mergeTwoLists(
  l1: ListNode | null = null,
  l2: ListNode | null = null
): ListNode | null {
  const head = new ListNode(0);
  let pointer = head;

  while (l1 !== null || l2 !== null) {
    if (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
        pointer.next = l1;
        l1 = l1.next;
      } else {
        pointer.next = l2;
        l2 = l2.next;
      }
    } else if (l2 !== null) {
      pointer.next = l2;
      l2 = l2.next;
    } else if (l1 !== null) {
      pointer.next = l1;
      l1 = l1.next;
    }

    pointer = pointer.next!;
    pointer.next = null;
  }

  return head.next;
}
