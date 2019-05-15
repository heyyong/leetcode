import { ListNode } from "@helper/ListNode";

export function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  const nodeList: ListNode[] = [];
  while (head !== null) {
    nodeList.push(head);
    head = head.next;
  }
  for (let i = 0; i < nodeList.length; i += 2) {
    if (i + 1 >= nodeList.length) {
      /* do nothing */
    } else {
      // swap list
      const temp = nodeList[i + 1];
      nodeList[i + 1] = nodeList[i];
      nodeList[i] = temp;
    }
  }

  for (let i = 0; i < nodeList.length; i++) {
    if (i + 1 >= nodeList.length) {
      nodeList[i].next = null;
    } else {
      nodeList[i].next = nodeList[i + 1];
    }
  }

  return nodeList[0];
}
