// Function for Addition
function add(a, b) {
  return a + b;
}

// Function for Subtraction
function subtract(a, b) {
  return a - b;
}
// Function for Multiplication
function multiply(a, b) {
  return a * b;
}

// Function for Division
function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Division by zero is not allowed!";
  }
}
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
console.log(`Addition: ${add(num1, num2)}`);
console.log(`Subtraction: ${subtract(num1, num2)}`);
console.log(`Multiplication: ${multiply(num1, num2)}`);
console.log(`Division: ${divide(num1, num2)}`);
