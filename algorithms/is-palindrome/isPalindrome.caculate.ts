export function isPalindrome(x: number):boolean {
  if (x < 0) return false;

  let reversed: number = 0;
  let copyX = x;
  let currBit = 0;

  while(x !== 0) {
    currBit = x % 10;
    x = Math.floor(x / 10);
    reversed = reversed * 10 + currBit;
  }

  return copyX === reversed
}