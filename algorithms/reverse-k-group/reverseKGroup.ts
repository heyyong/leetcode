import { ListNode } from "@helper/ListNode";

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  /**
   * clean stack and connect all in stack reverse
   * @param {ListNode[]} stack  reverseStack,length must equal k
   * @return {[ListNode, ListNode]} [head, end]
   */
  const reconnectList = function(stack: ListNode[]) {
    const ret = new ListNode(0);
    let pointer = ret;
    while (stack.length > 0) {
      pointer.next = stack.pop()!;
      pointer = pointer.next;
      pointer.next = null;
    }

    return [ret.next, pointer] as [ListNode, ListNode];
  };

  if (head === null) return null;
  const reverseStack: ListNode[] = [];
  let pointer: ListNode | null = head;
  const ret = new ListNode(0);
  let tail = ret;

  while (pointer !== null) {
    reverseStack.push(pointer);
    pointer = pointer.next;

    if (reverseStack.length === k) {
      const [start, end] = reconnectList(reverseStack);
      tail.next = start;
      tail = end;
      // stack has been clean
    }
  }

  const remain = reverseStack.length;
  if (remain > 0) {
    tail.next = reverseStack[0];
  }
  return ret.next;
}
