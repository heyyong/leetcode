import { noOrderedDeepEqual } from "@helper/no-ordered-equal";
import { threeSum } from "./three-sum";

const methods = [threeSum];

describe("three sums", function() {
  methods.forEach(threeSum => {
    test("[-1, 0, 1, 2, -1, -4]", function() {
      expect(
        noOrderedDeepEqual(threeSum([-1, 0, 1, 2, -1, -4]), [
          [-1, 0, 1],
          [-1, -1, 2]
        ])
      ).toEqual(true);
    });
  });
});
