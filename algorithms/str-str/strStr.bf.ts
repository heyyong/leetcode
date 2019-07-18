export function strStr(haystack: string, needle: string): number {
  if (needle === "") return 0;

  let i = 0, j = 0;
  while(haystack[i] !== undefined && needle[j] !== undefined) {
    if(haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      i = i - j + 1;
      j = 0;
    }
  }

  if(needle[j] === undefined) return i - j;


  return -1;
}
