// n = 1, [()]
// n = 2, [[() ()], [(())]]
// n = 3, [[()()()]], [(())()], [()(())], [((()))]
export function generateParenthesis(n: number): string[] {
  return generateAll(n * 2).filter(isParenthesis);
}

function generateAll(n: number): string[] {
  if (n <= 1) {
    return ["(", ")"];
  }

  const result: string[] = [];
  for (const parenthesis of generateAll(n - 1)) {
    result.push("(" + parenthesis);
    result.push(")" + parenthesis);
  }

  return result;
}

function isParenthesis(s: string): boolean {
  const stack: string[] = [];
  const start = "(";
  const end = ")";
  for (const char of s) {
    if (char === start) {
      stack.push(char);
    } else if (char === end) {
      if (stack.pop() === undefined) {
        return false;
      }
    }
    // else do nothing
  }

  return stack.length === 0;
}
