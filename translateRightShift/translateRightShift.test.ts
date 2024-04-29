import { expect, test } from "vitest";
import { translateRightShift } from "./translateRightShift";

test("translation should work", () => {
  expect(translateRightShift("öpö epeor")).toEqual("lol wowie");
  expect(translateRightShift("ejp s, o")).toEqual("who am i");
});
