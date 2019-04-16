export function isPalindrome(x: number):boolean {
  return (
    Array
      .from(x.toString())
      .reverse()
      .join('') === x.toString()
  );
}