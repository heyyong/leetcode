import { ListNode } from "@helper/ListNode";
import { mergeKLists } from "./mergeKLists";

describe("merge k list node", function() {
  test("three", function() {
    const list1 = ListNode.from([1, 4, 5]);
    const list2 = ListNode.from([1, 3, 4]);
    const list3 = ListNode.from([2, 6]);
    expect(mergeKLists([list1, list2, list3])).toEqual(
      ListNode.from([1, 1, 2, 3, 4, 4, 5, 6])
    );
  });
});
