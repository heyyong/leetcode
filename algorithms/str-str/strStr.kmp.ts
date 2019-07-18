export function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0;

  const next: number[] = [0];
  let j = 0;
  let i = 1;
  while (i < needle.length) {
    if (needle[i] === needle[j]) {
      next[i] = j + 1;
      i++;
      j++;
      continue;
    }

    if (j === 0) {
      next[i] = 0;
      i++;
    } else {
      j = next[j - 1];
    }
  }

  let p = 0;
  let k = 0;
  while (k < needle.length && p + k < haystack.length) {
    if (needle[k] === haystack[p + k]) {
      if (k === needle.length - 1) return p;

      k++;
      continue;
    }

    if (k === 0) {
      p += k + 1;
      k = 0;
      continue;
    } else {
      p += k - next[k - 1];
      k = next[k - 1];
    }
  }

  return -1;
}
