export function lengthOfLongestSubstring(s: string) {
  let n = s.length;
  let ans: number = 0;
  let runeMap = new Map<string, number>();

  for (let j = 0, i = 0; j < n; j++) {
    i = Math.max(i, runeMap.get(s[j]) || 0);
    ans = Math.max(ans, j - i + 1);
    runeMap.set(s[j], j + 1);
  }

  return ans;
}