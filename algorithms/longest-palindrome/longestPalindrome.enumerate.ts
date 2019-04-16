export function longestPalindrome(s: string = ""): string {
  const n = s.length;
  const ans = {
    i: 0,
    j: 0,
    length: 0,
  };

  for (let i = 0; i < n; i++) {
    for (let j = i; j <= n; j++) {
      if (checkPalindrome(s, i, j) && j - i > ans.length) {
        ans.i = i;
        ans.j = j;
        ans.length = j - i;
      }
    }
  }

  return s.slice(ans.i, ans.j);
}

export function checkPalindrome(str: string, start: number, end: number) {
  if (start === end) return false;

  for (let i = 0; start + i < end; i++) {
    if (str[start + i] !== str[end - i - 1]) return false;
  }

  return true;
}
