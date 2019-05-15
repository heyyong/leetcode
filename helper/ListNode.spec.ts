import { ListNode } from "./ListNode";

describe('ListNode', function() {
  function buildListNode(arr: number[]): ListNode | null {
    let head = new ListNode(0);
    let pointer = head;
    for(let val of [1, 2, 3, 4]) {
      pointer.next = new ListNode(val);
      pointer = pointer.next;
    }
    return head.next;
  }
  test('from', function() {
    let origin = [1, 2, 3, 4]
    let head = buildListNode(origin);
    expect(ListNode.from(origin)).toEqual(head)
  })

  test('iterator', function() {
    let origin = [1, 2, 5, 7]
    let head = buildListNode(origin);
    expect(Array.from(head as Iterable<number>))
  })
})