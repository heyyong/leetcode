import { mergeTwoLists } from "./mergeTwoLists";
import { ListNode } from "@helper/ListNode";

describe("merge two lists", function() {
  test("1->2->4, 1->3->4", function() {
    expect(
      mergeTwoLists(ListNode.from([1, 2, 4]), ListNode.from([1, 3, 4]))
    ).toEqual(ListNode.from([1, 1, 2, 3, 4, 4]));
  });
});
