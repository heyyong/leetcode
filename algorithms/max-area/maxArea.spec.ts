import { maxArea } from "./maxArea";
import { maxArea as maxAreaDoublePointer } from "./maxArea.doublePointer";

const maxAreaMethods = [maxArea, maxAreaDoublePointer];

describe("max area", function() {
  maxAreaMethods.forEach(maxArea => {
    test("[1,8,6,2,5,4,8,3,7]", function() {
      expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
    });
  });
});
