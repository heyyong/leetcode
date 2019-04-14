import { longestPalindrome } from "./longestPalindrome.enumerate";
import { longestPalindrome as longestPalindromeSubStr } from './longestPalindrome.substr';

const longestPalindromeMethods = [
  longestPalindrome,
  longestPalindromeSubStr
];

const dddd = "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd";

describe('longest palindrome', function() {
  longestPalindromeMethods
    .forEach(
      (longestPalindrome) => {
        test('babad', function() {
          expect(longestPalindrome('babsd')).toEqual('bab');
        });
      
        test('cbbd', function() {
          expect(longestPalindrome('cbbd')).toEqual('bb');
        })
      
        test(dddd, function() {
          expect(longestPalindrome(dddd)).toEqual(dddd);
        })
      }
    )
})