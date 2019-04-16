export function isPalindrome(x: number): boolean {
  if (x < 0 || (x !== 0 && x <= 10)) return false;

  let reversed: number = 0;
  let currBit = 0;

  while (x > reversed) {
    currBit = reversed % 10;
    x = Math.floor(x / 10);
    reversed = reversed * 10 + currBit;
  }

  return x === reversed || Math.floor(x / 10) === x;
}
