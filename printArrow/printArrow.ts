type Direction = "up" | "right" | "left" | "down";

export function printArrow(direction: Direction, height: number): string {
  if (height < 2) {
    throw Error("cannot build an arrow with this height");
  }

  const output: string[] = [];

  switch (direction) {
    case "up":
      for (let i = 0; i < height; i++) {
        if (i === 0) {
          output.push(`${" ".repeat(Math.ceil(height / 2))}*`);
        } else {
          output.push(
            `${" ".repeat(height - 1 - i)}*${" ".repeat(i + (i - 1))}*`,
          );
        }
      }
      break;
    case "down":
      for (let i = height - 1; i >= 0; i--) {
        if (i === 0) {
          output.push(`${" ".repeat(height - 1)}*`);
        } else {
          output.push(
            `${" ".repeat(height - 1 - i)}*${" ".repeat(i + (i - 1))}*`,
          );
        }
      }
      break;
    case "right":
      for (let i = 0; i < height; i++) {
        output.push(`${" ".repeat(i)}*`);
      }
      for (let i = height - 2; i >= 0; i--) {
        output.push(`${" ".repeat(i)}*`);
      }
      break;
    case "left":
      for (let i = height - 1; i >= 0; i--) {
        output.push(`${" ".repeat(i)}*`);
      }
      for (let i = 1; i < height; i++) {
        output.push(`${" ".repeat(i)}*`);
      }
  }

  return output.join("\n");
}
