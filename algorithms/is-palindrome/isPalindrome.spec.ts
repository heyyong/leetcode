import { isPalindrome } from "./isPalindrome.str";

describe('is palindrome', function() {
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