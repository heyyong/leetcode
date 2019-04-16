export function longestPalindrome(s: string = ""): string {
  if (s === '') return '';
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i ++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i+1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substr(start, end - start + 1);
}

function expandAroundCenter(s: string, left: number, right: number) {
  let L = left, R = right;
  while ( L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
    L--;
    R++;
  }
  return R - L - 1;
}