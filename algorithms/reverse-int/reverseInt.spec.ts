import { reverseInt } from "./reverseInt";
import { reverseInt as reverseIntCalculate } from "./reverseInt.calculate";

const reverseIntMethods = [reverseInt, reverseIntCalculate];

describe("reverse int", function() {
  reverseIntMethods.forEach(parseInt => {
    test("123", function() {
      expect(reverseInt(123)).toEqual(321);
    });

    test("-123", function() {
      expect(reverseInt(-123)).toEqual(-321);
    });

    test("120", function() {
      expect(reverseInt(120)).toEqual(21);
    });

    test("overflow", function() {
      expect(reverseInt(1534236469)).toEqual(0);
    });
  });
});
