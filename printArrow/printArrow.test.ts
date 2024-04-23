import { test, expect } from "vitest";
import { printArrow } from "./printArrow";

test("Print arrow pointing right with size 3", () => {
  const expectedOutput = `*
 *
  *
 *
*`;
  expect(printArrow("right", 3)).toEqual(expectedOutput);
});

test("Print arrow pointing left with size 5", () => {
  const expectedOutput = `    *
   *
  *
 *
*
 *
  *
   *
    *`;
  expect(printArrow("left", 5)).toEqual(expectedOutput);
});

test("Print arrow pointing up with size 2", () => {
  const expectedOutput = ` *
* *`;

  expect(printArrow("up", 2)).toEqual(expectedOutput);
});

test("Print arrow pointing up with size 3", () => {
  const expectedOutput = `  *
 * *
*   *`;
  expect(printArrow("up", 3)).toEqual(expectedOutput);
});

test("Print arrow pointing down with size 3", () => {
  const expectedOutput = `*   *
 * *
  *`;
  expect(printArrow("down", 3)).toEqual(expectedOutput);
});

test("Print arrow pointing down with size 5", () => {
  const expectedOutput = `*       *
 *     *
  *   *
   * *
    *`;
  expect(printArrow("down", 5)).toEqual(expectedOutput);
});

test("Arrows should have the correct height", () => {
  expect(printArrow("up", 3).split("\n")).toHaveLength(3);
  expect(printArrow("down", 4).split("\n")).toHaveLength(4);
  expect(printArrow("right", 5).split("\n")).toHaveLength(9);
  expect(printArrow("left", 6).split("\n")).toHaveLength(11);
});
