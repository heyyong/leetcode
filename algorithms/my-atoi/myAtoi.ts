const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

const ZERO = 48;

export function myAtoi(str: string): number {
  let ret: number = 0;
  let op: boolean = true;
  str = str.trimLeft();

  if (str[0] === "-") {
    op = false;
    str = str.slice(1);
  } else if (str[0] === "+") {
    str = str.slice(1);
  }

  for (const char of str) {
    const curBit = parseCharInt(char);

    if (isNaN(curBit)) {
      return op ? ret : -ret;
    } else if (INT_MAX - ret * 10 < curBit) {
      return op ? INT_MAX : INT_MIN;
    }

    ret = ret * 10 + curBit;
  }

  return op ? ret : -ret;
}

function parseCharInt(char: string): number {
  const unicode = char.charCodeAt(0);
  const ret = unicode - ZERO;
  return ret > 9 || ret < 0 ? NaN : ret;
}
