import { threeSum } from "./three-sum";

const methods = [threeSum];

describe("three sums", function() {
  methods.forEach(threeSum => {
    test("[-1, 0, 1, 2, -1, -4]", function() {
      expect(new Set(threeSum([-1, 0, 1, 2, -1, -4], 0))).toEqual(
        new Set([[-1, 0, 1], [-1, -1, 2]])
      );
    });
  });
});
