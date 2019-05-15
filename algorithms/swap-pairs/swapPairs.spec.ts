import { swapPairs } from "./swapPairs";
import { ListNode } from "@helper/ListNode";

describe("swap pairs", function() {
  test("1, 2, 3, 4", function() {
    expect(swapPairs(ListNode.from([1, 2, 3, 4]))).toEqual(
      ListNode.from([2, 1, 4, 3])
    );
  });
});
