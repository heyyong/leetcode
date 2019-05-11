import { twoSum } from "./twoSum";
import { twoSum as towSumN2 } from "./twoSum.n2";

const methods = [twoSum, towSumN2];

describe("two sum", function() {
  methods.forEach(twoSum => {
    test("two sums", function() {
      const nums = [2, 7, 11, 15];
      const target = 9;

      expect(twoSum(nums, target)).toEqual([0, 1]);
    });
  });
});
