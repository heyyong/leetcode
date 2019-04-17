import { maxArea } from "./maxArea";

describe("max area", function() {
  test("[1,8,6,2,5,4,8,3,7]", function() {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });
});
