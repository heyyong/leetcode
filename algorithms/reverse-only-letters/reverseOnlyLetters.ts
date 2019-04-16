export function reverseOnlyLetters(S: string): string {
  let ret: string = "";
  let end: number = S.length - 1;
  for (const char of S) {
    if (!isLetter(char)) {
      ret += char;
      continue;
    } else if (!isLetter(S.charAt(end))) {
      while (!isLetter(S.charAt(end))) end--;
    }

    ret += S.charAt(end);
    end--;
  }

  return ret;
}

function isLetter(char: string): boolean {
  return /[a-zA-Z]/.test(char);
}
