export function zero(func?: (num: number) => number) {
  return func ? func(0) : 0;
}

export function one(func?: (num: number) => number) {
  return func ? func(1) : 1;
}

export function two(func?: (num: number) => number) {
  return func ? func(2) : 2;
}

export function three(func?: (num: number) => number) {
  return func ? func(3) : 3;
}

export function four(func?: (num: number) => number) {
  return func ? func(4) : 4;
}

export function five(func?: (num: number) => number) {
  return func ? func(5) : 5;
}

export function six(func?: (num: number) => number) {
  return func ? func(6) : 6;
}

export function seven(func?: (num: number) => number) {
  return func ? func(7) : 7;
}

export function eight(func?: (num: number) => number) {
  return func ? func(8) : 8;
}

export function nine(func?: (num: number) => number) {
  return func ? func(9) : 9;
}

export function plus(right: number) {
  return function (left: number) {
    return left + right;
  };
}

export function minus(right: number) {
  return function (left: number) {
    return left - right;
  };
}

export function times(right: number) {
  return function (left: number) {
    return left * right;
  };
}

export function dividedBy(right: number) {
  return function (left: number) {
    return Math.floor(left / right);
  };
}
