const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};

console.log("Exercise 1:", maxOfTwoNumbers(3, 9));

function isAdult(x) {
  if (x < 21) {
    return "minor";
  } else {
    return "Adult";
  }
}

console.log("Exercise 2:", isAdult(22));
