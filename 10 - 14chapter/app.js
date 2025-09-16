var city = prompt("Enter your city name:");

// Condition for Karachi or Islamabad
if (city.toLowerCase() == "karachi" || city.toLowerCase() == "islamabad") {
  alert("Welcome to the city of lights");

// Condition for Lahore or Hyderabad
} else if (city.toLowerCase() == "lahore" || city.toLowerCase() == "hyderabad") {
  alert(city + " is better");

} else {
  alert("City not found in our list");
}

// Guess Game =====
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = +prompt("Guess the secret number (1 to 10):");

if (userGuess === secretNumber) {
  alert("Bingo! Correct answer ");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
  alert("Close enough to the correct answer!");
} else {
  alert("Wrong guess! The secret number was " + secretNumber);
}

//  Divisible by 3 =====
let number = +prompt("Enter a number to check divisibility by 3:");
if (number % 3 === 0) {
  alert(number + " is divisible by 3 ");
} else {
  alert(number + " is not divisible by 3 ");
}

//  Even or Odd =====
let num = +prompt("Enter a number to check Even or Odd:");
if (num % 2 === 0) {
  alert(num + " is an Even number ");
} else {
  alert(num + " is an Odd number ");
}



let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");

if (num1 > num2) {
  alert(num1 + " is larger");
} else if (num2 > num1) {
  alert(num2 + " is larger");
} else {
  alert("Both numbers are equal");
}


// Write a program that takes input a number from user & state whether the number is positive, negative or zero.
let nUmber = +prompt("Enter a number:");

if (nUmber > 0) {
  alert(nUmber + " is Positive");
} else if (nUmber < 0) {
  alert(nUmber + " is Negative");
} else {
  alert("The number is Zero");
}


// Write a program that takes a character (string of length 1) and returns true if it is a vowel, false otherwise.
let char = prompt("Enter a vowel:").toLowerCase();

if (char.length === 1) {
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    alert(char + " is a Vowel ");
  } else {
    alert(char + " is not a Vowel ");
  }
} else {
  alert("Please enter only one character!");
}