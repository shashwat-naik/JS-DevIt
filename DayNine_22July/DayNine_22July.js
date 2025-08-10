// Q1 Write a loop from 1 to 100 that skips the multiple of 3 and 5 (updated now it should include the numbers which are multiple of both 3 and 5).
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 || i % 5 == 0) {
//     if (i % 3 == 0 && i % 5 == 0) console.log(i);
//     continue;
//   }
//   console.log(i);
// }

// Q2 Given an input element with type="email", fetch the value of the type attribute using JavaScript
let inp = document.getElementById("inp");
var btn = document.getElementById("submit");

btn.addEventListener("click", function () {
  let change = inp.getAttribute("type");
  let ans = inp.value;
  console.log(change);
  console.log(`value inside it is ${ans}`);
});

// Q3 Write a function to hide a paragraph when a button is clicked.
let para = document.getElementById("content");
var btn = document.getElementById("magic");
let alternative = 1;
btn.addEventListener("click", function () {
  if (alternative == 1) {
    para.style.display = "none";
    btn.innerText = "Hide Para";
    alternative = 0;
  } else {
    para.style.display = "block";
    btn.innerText = "Show Para";
    alternative = 1;
  }
});

// Q4 Prompt the user to enter their age and display it in an alert.
// let value = prompt("Enter your age: ");
// let decide = value >= 18 ? "Adult" : "Child";
// console.log(decide);

// Q5 Create a form and reset it using a button.

var btn = document.getElementById("click");
var type = document.getElementById("details");
btn.addEventListener("click", function () {
  type.reset();
});

function myFun() {
  document.getElementById("details").reset();
}

// Q6 Write a function that returns the square of a number.
// function result(value) {
//   console.log(`Square of ${value} is ${value * value}.`);
// }
// result(prompt("Enter a value: "));

// Q7 Split the String "red,green,blue" into an array.
let a = "red,green,blue";
const arr = a.split(",");
console.log(arr);

// Q8 Use a ternary operator to display "Pass" if marks are above 40, otherwise "Fail".
var marks = prompt("Enter your mark out of 100: ");
let ans = marks > 40 ? "Pass" : "Fail";
console.log(ans);
