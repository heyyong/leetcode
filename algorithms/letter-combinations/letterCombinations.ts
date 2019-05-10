const numberMap = [
  "",
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz"
];

export function letterCombinations(digits: string): string[] {
  return combination(digits, []);
}

function combination(digits: string, pre: string[]): string[] {
  const n = digits.length;
  if (n === 0) return pre;
  const index = Number.parseInt(digits[n - 1]);
  const letters = numberMap[index];
  let result: string[] = [];
  if (pre.length === 0) result = result.concat(Array.from(letters));
  else {
    for (const char of letters) {
      result = result.concat(pre.map(s => char + s));
    }
  }
  return combination(digits.slice(0, n - 1), result);
}
