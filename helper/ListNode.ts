export class ListNode {
  constructor(public val: number, public next: ListNode | null = null) {}

  public *[Symbol.iterator](): IterableIterator<number> {
    const head = new ListNode(-1, this);
    while (head.next !== null && head.next.val >= 0) {
      yield head.next.val;
      head.next = head.next.next;
    }
  }

  public static from(iteration: {
    [Symbol.iterator](): IterableIterator<number>;
  }): ListNode {
    const head = new ListNode(-1, null);
    let pointer: ListNode = head;

    for (const val of iteration) {
      pointer.next = new ListNode(val, null);
      pointer = pointer.next;
    }

    return head.next!;
  }
}