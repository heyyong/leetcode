export function isPalindrome(x: number): boolean {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;

  let reverted: number = 0;
  let currBit = 0;

  while (x > reverted) {
    currBit = x % 10;
    x = Math.floor(x / 10);
    reverted = reverted * 10 + currBit;
  }

  return x === reverted || Math.floor(reverted / 10) === x;
}
