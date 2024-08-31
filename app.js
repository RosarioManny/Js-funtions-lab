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

console.log("Exercise 2:", isAdult(21));

// Exercise 3

function isCharAVowel(letter) {
  if (("a", "e", "i", "o", "u")) {
    return true;
  } else {
    return false;
  }
}

console.log("Exercise 3:", isCharAVowel("a"));

// Exercise 4

function generateEmail(name, domain) {
  return `${name}@${domain}`;
}
console.log("Exercise 4:", generateEmail("SuperMannyDonuts69", "gmail.com"));

// Exercise 5

function greetUser(person, timeOfDay) {
  if (timeOfDay === "morning") {
    return `Good ${timeOfDay}, ${person}!`;
  } else if (timeOfDay === "afternoon") {
    return `Good ${timeOfDay}, ${person}!`;
  } else if (timeOfDay === "morning") {
    return `Good ${timeOfDay}, ${person}!`;
  }
}

console.log("Exercise 5:", greetUser("Sam", "morning"));

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
console.log("Exercise 6:", maxOfThree(5, 10, 8));

// Exercise 7

// console.log(Math.max(1, 69, 420));

function calculateTip(bill, tip) {
  let billAmount = bill;
  const tipPercent = tip / 100;
  return billAmount * tipPercent;
}

console.log("Exercise 7:", calculateTip(50, 20));

// Exercise 8

function convertTemperature(temp, deg) {
  if (deg === "C") {
    return `${(temp * 1.8) + 32} Fahrenheit`;
  } else if (deg === "F") {
    return `${(temp - 32) / 1.8} Celsius`;
  }
}

console.log('Exercise 8:', convertTemperature(32, "C"));

// Exercise 9

function basicCalculator(x, y, operation) {
  if (operation === "subtract") {
    return x - y
  } else if (operation === "add") {
    return x + y
  }
    else if (operation === "multiply") {
      return x * y
    }
      else if (operation === "divide") {
        return x / y
}
}

console.log('Exercise 9:', basicCalculator(10, 5, "subtract"));
