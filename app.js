const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};

console.log("Exercise 1:", maxOfTwoNumbers(3, 9));
// Struggled here, figured out how to use if statement
function isAdult(x) {
  if (x < 21) {
    return "minor";
  } else {
    return "Adult";
  }
}

console.log("Exercise 2:", isAdult(22));

function isCharAVowel(x) {
  if ("a") {
    return true;
  } else {
    return false;
  }
}

console.log("Exercise 3:", isCharAVowel("a"));

function generateEmail(x, y) {
  return x + y;
}
console.log("Exercise 4:", generateEmail("SuperMannyDonuts69", "@gmail.com"));

let person = "Manny";
let day = "Morning";

console.log("Exercise 5:", `Good ${day}, ${person}!`);
