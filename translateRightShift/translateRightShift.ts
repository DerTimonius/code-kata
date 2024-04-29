const shiftedKeys: Record<string, string> = {
  w: "q",
  e: "w",
  r: "e",
  t: "r",
  z: "t",
  u: "z",
  i: "u",
  o: "i",
  p: "o",
  ü: "p",
  "+": "ü",
  s: "a",
  d: "s",
  f: "d",
  g: "f",
  h: "g",
  j: "h",
  k: "h",
  l: "k",
  ö: "l",
  ä: "ö",
  "#": "ä",
  y: "<",
  x: "y",
  c: "x",
  v: "c",
  b: "v",
  n: "b",
  m: "n",
  ",": "m",
};

export function translateRightShift(text: string) {
  return text
    .split("")
    .map((char) => shiftedKeys[char] ?? char)
    .join("");
}
