import { isPalindrome as isPalindromeStr } from "./isPalindrome.str";
import { isPalindrome as isPalindromeCalculate } from "./isPalindrome.caculate";
import { isPalindrome as isPalindromeReverseCalculate } from "./isPalindrome.revertedCalculate";

const isPalindromeMethods = [
  isPalindromeStr,
  isPalindromeCalculate,
  isPalindromeReverseCalculate
];

describe("is palindrome", function() {
  isPalindromeMethods.forEach(isPalindrome => {
    test("121", function() {
      expect(isPalindrome(121)).toBeTruthy();
    });

    test("-121", function() {
      expect(isPalindrome(-121)).toBeFalsy();
    });

    test("10", function() {
      expect(isPalindrome(10)).toBeFalsy();
    });

    test("123", function() {
      expect(isPalindrome(123)).toEqual(false);
    });
  });
});
