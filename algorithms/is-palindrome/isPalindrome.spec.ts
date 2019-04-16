import { isPalindrome as isPalindromeStr } from "./isPalindrome.str";
import { isPalindrome as isPalindromeCalculate } from './isPalindrome.caculate';

const isPalindromeMethods = [
  // isPalindromeStr,
  isPalindromeCalculate
]

describe('is palindrome', function() {
  isPalindromeMethods.forEach((isPalindrome) => {
    test('121', function() {
      expect(isPalindrome(121)).toBeTruthy();
    });
  
    test('-121', function() {
      expect(isPalindrome(-121)).toBeFalsy();
    });
  
    test('10', function() {
      expect(isPalindrome(10)).toBeFalsy();
    })
  })
})