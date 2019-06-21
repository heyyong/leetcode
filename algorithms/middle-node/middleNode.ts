import { ListNode } from "@helper/ListNode";

export function middleNode(head: ListNode): ListNode {
  let len: number = 0;
  let pointer: ListNode | null = head;
  while (pointer !== null) {
    len++;
    pointer = pointer.next;
  }

  const middle = Math.floor(len / 2) + 1;
  pointer = head;
  for (let i = 1; i < middle; i++) {
    pointer = pointer!.next;
  }

  return pointer!;
}
