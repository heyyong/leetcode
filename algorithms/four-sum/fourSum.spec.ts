import { fourSum } from "./fourSum";

describe("four sum", function() {
  test("[1, 0, -1, 0, -2, 2]", function() {
    expect(new Set(fourSum([1, 0, -1, 0, -2, 2], 0))).toEqual(
      new Set([[-1, 0, 0, 1], [-2, -1, 1, 2], [-2, 0, 0, 2]])
    );
  });
  test("[-3, -2, -1, 0, 0, 1, 2, 3]", function() {
    expect(new Set(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0))).toEqual(
      new Set([
        [-3, -2, 2, 3],
        [-3, -1, 1, 3],
        [-3, 0, 0, 3],
        [-3, 0, 1, 2],
        [-2, -1, 0, 3],
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1]
      ])
    );
  });

  test("[-1, -5, -5, -3, 2, 5, 0, 4]", function() {
    expect(new Set(fourSum([-1, -5, -5, -3, 2, 5, 0, 4], -7))).toEqual(
      new Set([[-5, -5, -1, 4], [-5, -3, -1, 2]])
    );
  });
});
