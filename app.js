// Exercise 1

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};

console.log("Exercise 1:", maxOfTwoNumbers(3, 9));

// Exercise 2

function isAdult(x) {
  if (x < 21) {
    return "minor";
  } else {
    return "Adult";
  }
}

console.log("Exercise 2:", isAdult(22));

// Exercise 3

function isCharAVowel(x) {
  if ("a") {
    return true;
  } else {
    return false;
  }
}

console.log("Exercise 3:", isCharAVowel("a"));

// Exercise 4

function generateEmail(x, y) {
  return x + y;
}
console.log("Exercise 4:", generateEmail("SuperMannyDonuts69", "@gmail.com"));

// Exercise 5

let person = "Manny";
let day = "Morning";

console.log("Exercise 5:", `Good ${day}, ${person}!`);

// Exercise 6

function maxOfThree(x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else if (z > y && z > x) {
    return z;
  }
}
console.log("Exercise 6:", maxOfThree(3, 16, 69));

// Exercise 7

// console.log(Math.max(1, 69, 420));

function calculateTip(x, y) {
  let billAmount = x;
  const tipPercent = y / 100;
  return billAmount * tipPercent;
}

console.log("Exercise 7:", calculateTip(50, 20));

// Exercise 8
