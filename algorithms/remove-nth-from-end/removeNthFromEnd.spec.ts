import { ListNode } from "@helper/ListNode";
import { removeNthFromEnd } from "./removeNthFromEnd";

describe("remove nth from end", function() {
  test("1->2->3->4->5", function() {
    const origin = ListNode.from([1, 2, 3, 4, 5]);
    expect(removeNthFromEnd(origin, 2)).toEqual(ListNode.from([1, 2, 3, 5]));
  });

  test("1", function() {
    expect(removeNthFromEnd(ListNode.from([1]), 1)).toEqual(null);
  });

  test("1, 2", function() {
    expect(removeNthFromEnd(ListNode.from([1, 2]), 2)).toEqual(
      ListNode.from([2])
    );
  });
});
