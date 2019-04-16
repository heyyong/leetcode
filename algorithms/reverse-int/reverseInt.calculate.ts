const MAX_BOUNDARY = 214748364;
const MIN_BOUNDARY = -214748364;

export function reverseInt(x: number): number {
  let ret: number = 0;
  let curBit: number = 0;

  while (x !== 0) {
    curBit = x % 10;
    x = Math.floor(x / 10);

    ret = ret * 10 + curBit;

    if (ret > MAX_BOUNDARY || ret < MIN_BOUNDARY) return 0;
  }

  return ret;
}
