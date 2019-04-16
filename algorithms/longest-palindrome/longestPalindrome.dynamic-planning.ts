type Palindrome = {
  start: number;
  end: number;
  length: number;
}

export function longestPalindrome(s: string = ""): string {
  if (s.length === 0 || s.length === 1) return s;

  const n = s.length;
  const longestPalindrome: Palindrome | null = {start: -1, end: -1, length: 0};
  const smallestPalindrome: Palindrome[] = [];


  const spreadPalindrome = (s: string, start: number, end: number): void => { // [start, end)
    if (
      // check substring exist
      s[start] !== undefined && s[end - 1] !== undefined &&
      // check new substring is palindrome
      s[start] === s[end - 1]
    ) {
      if (end - start > longestPalindrome.length) {
        longestPalindrome.start = start;
        longestPalindrome.end = end;
        longestPalindrome.length = end - start;
      }
      return spreadPalindrome(s, start - 1, end + 1);
    }
  };

  Array
    .from(s)
    .reduce(
      (smallestPalindrome, _, i) => {
        // find single char palindrome
        if (i + 1 < n && s[i] === s[i + 1]) {
          smallestPalindrome.push({
            start: i,
            end: i + 2,
            length: 2,
          });
        }

        // find three char palindrome
        if (i - 1 >= 0 && i + 1 < n && s[i - 1] === s[i + 1]) {
          smallestPalindrome.push({
            start: i - 1,
            end: i + 2,
            length: 3,
          });
        }

        return smallestPalindrome;
      },
      smallestPalindrome
    )
    .forEach((smallestPalindrome) => {
      spreadPalindrome(s, smallestPalindrome.start, smallestPalindrome.end);
    });

  if (longestPalindrome.length === 0) return "";

  return s.slice(longestPalindrome.start, longestPalindrome.end);
}
