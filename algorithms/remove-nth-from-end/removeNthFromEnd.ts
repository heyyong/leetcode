import { ListNode } from "@helper/ListNode";

export function removeNthFromEnd(head: ListNode, n: number): ListNode | null {
  const list: ListNode[] = [];

  let pointer: ListNode | null = head;

  while (pointer !== null) {
    list.push(pointer);
    pointer = pointer.next;
  }

  const index = list.length - n;
  if (index === 0) {
    list.shift();
  } else {
    const prev = list[index - 1];
    const curr = list[index];
    prev.next = curr.next;
    curr.next = null;
  }
  return list[0] === undefined ? null : list[0];
}
