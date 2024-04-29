import { expect, test } from "vitest";
import {
  dividedBy,
  eight,
  five,
  four,
  minus,
  nine,
  one,
  plus,
  seven,
  six,
  three,
  times,
  two,
  zero,
} from "./curryingNumbers";

test("adding function", () => {
  expect(five(plus(two()))).toEqual(7);
  expect(eight(plus(nine()))).toEqual(17);
});

test("subtracting function", () => {
  expect(four(minus(zero()))).toEqual(4);
  expect(six(minus(three()))).toEqual(3);
});

test("multiply function", () => {
  expect(one(times(seven()))).toEqual(7);
  expect(five(times(six()))).toEqual(30);
});

test("divide function", () => {
  expect(four(dividedBy(two()))).toEqual(2);
  expect(nine(dividedBy(three()))).toEqual(3);
});
