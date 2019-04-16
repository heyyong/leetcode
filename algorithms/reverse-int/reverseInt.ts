export function reverseInt(x: number): number {
  const reversed = Array.from(Math.abs(x).toString())
    .reverse()
    .join("");

  const ret = x > 0 ? Number(reversed) : -Number(reversed);

  if (ret < -(2 ** 31) || ret > 2 ** 31 - 1) return 0;
  else return ret;
}
