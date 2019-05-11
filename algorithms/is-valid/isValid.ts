const paraness = {
  "}": "{",
  ")": "(",
  "]": "["
};

const start = ["{", "(", "["];
const end = ["}", ")", "]"];

export function isValid(s: string): boolean {
  if (s.length === 0) return true;
  const stack: string[] = [];

  for (const char of s) {
    if (start.includes(char)) {
      stack.push(char);
    } else if (end.includes(char)) {
      // @ts-ignore
      if (stack.pop() === paraness[char]) {
      } else return false;
    }
  }

  if (stack.pop() === undefined) return true;
  else return false;
}
