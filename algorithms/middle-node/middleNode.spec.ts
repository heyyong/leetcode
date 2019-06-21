import { middleNode } from "./middleNode";
import { ListNode } from "@helper/ListNode";

describe("middleNode", function() {
  test("[1, 2, 3, 4, 5]", function() {
    expect(Array.from(middleNode(ListNode.from([1, 2, 3, 4, 5])))).toEqual([
      3,
      4,
      5
    ]);
  });

  test("[1, 2, 3, 4, 5, 6]", function() {
    expect(Array.from(middleNode(ListNode.from([1, 2, 3, 4, 5, 6])))).toEqual([
      4,
      5,
      6
    ]);
  });
});
