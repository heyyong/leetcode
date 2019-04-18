export function longestCommonPrefix(strs: string[] = []): string {
  if (strs.length === 0) return "";

  const n = Math.max(...strs.map(str => str.length));
  let longestCommonPrefix = "";

  for (let i = 0; i < n; i++) {
    const char = strs[0][i];

    if (strs.every(str => str[i] === char)) {
      longestCommonPrefix += char;
    } else {
      break;
    }
  }

  return longestCommonPrefix;
}
