import { reverseKGroup } from "./reverseKGroup";
import { ListNode } from "@helper/ListNode";

describe("reverseKGroup", function() {
  test("1,2,3,4,5 2", function() {
    expect(
      Array.from(reverseKGroup(ListNode.from([1, 2, 3, 4, 5]), 2)!)
    ).toEqual([2, 1, 4, 3, 5]);
  });

  test("1,2,3,4,5 3", function() {
    expect(
      Array.from(reverseKGroup(ListNode.from([1, 2, 3, 4, 5]), 3)!)
    ).toEqual([3, 2, 1, 4, 5]);
  });

  test("1,2 2", function() {
    expect(Array.from(reverseKGroup(ListNode.from([1, 2]), 2)!)).toEqual([
      2,
      1
    ]);
  });
});
