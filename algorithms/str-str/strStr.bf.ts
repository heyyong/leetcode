export function strStr(haystack: string, needle: string): number {
  if (needle === "") return 0;

  function isSame(i: number) {
    let j = 0;
    while (needle[j] !== undefined) {
      if (haystack[i + j] !== needle[j]) return false;

      j++;
    }
    return true;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (isSame(i)) return i;
  }

  return -1;
}
