/* eslint-disable */
export function romanToInt(s: string): number {
  let offset = 0;
  let num = 0;

  while (s.charAt(offset) !== "") {
    switch (s.charAt(offset)) {
      case "I": {
        num += 1;
        break;
      }
      case "V": {
        num += 5;
        break;
      }
      case "X": {
        num += 10;
        break;
      }
      case "L": {
        num += 50;
        break;
      }
      case "C": {
        num += 100;
        break;
      }
      case "D": {
        num += 500;
        break;
      }
      case "M": {
        num += 1000;
        break;
      }
      default: {
        break;
      }
    }

    if (offset > 0) {
      if (
        (s.charAt(offset) === "V" || s.charAt(offset) === "X") &&
        s.charAt(offset - 1) === "I"
      ) {
        num -= 1 * 2;
      } else if (
        (s.charAt(offset) === "L" || s.charAt(offset) === "C") &&
        s.charAt(offset - 1) === "X"
      ) {
        num -= 10 * 2;
      } else if (
        (s.charAt(offset) === "D" || s.charAt(offset) === "M") &&
        s.charAt(offset - 1) === "C"
      ) {
        num -= 100 * 2;
      }
    }

    offset++;
  }

  return num;
}
/* eslint-enable */
