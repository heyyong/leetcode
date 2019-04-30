import { threeSum } from "./three-sum";

describe("three sums", function() {
  test("[-1, 0, 1, 2, -1, -4]", function() {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
  });
});
