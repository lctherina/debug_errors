/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp

console.log("Welcome to the bootcamp."); // output Welcome to the bootcamp.

// What’s Wrong? SyntaxError. Needs closing quotes and parenthesis and semicolon.


// Program B 
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, "eight"];//runtime error
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// What’s Wrong? The string "eight" within the array results in NaN instead of the expected integer 16.



// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false

// What’s Wrong? in line 56, the return should be set to false instead of true and in line 59, the return should be set to true instead of false
//This will clear up the confusion with logic error.

function isPrime(num) {
  if (num<2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7)); // True