import { ListNode } from "@helper/ListNode";

export function mergeKLists(lists: ListNode[]): ListNode | null {
  lists = lists.filter(list => list !== null)
  const head = new ListNode(0);
  let pointer = head;
  while (lists.length !== 0) {
    let index = 0;
    let minValue = lists[0].val;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].val < minValue) {
        index = i;
        minValue = lists[i].val;
      }
    }
    pointer.next = lists[index];
    pointer = pointer.next;
    if (pointer.next === null) {
      lists.splice(index, 1);
    } else {
      lists[index] = pointer.next;
      pointer.next = null;
    }
  }

  return head.next;
}
