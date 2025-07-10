// Q1 Declare 3 variable using var,let and const and print using console.log
var a = "Shashwat Naik";
let a1 = true;
const g = 9.8;
console.log(`a is ${a} using var.`);
console.log(`b is ${a1} using let.`);
console.log(`g is ${g} using const.`);

// Q2 Declare one variable for each data type and log them to the console.
var a = "Hello";
var b = 2.13;
var c = true;
var d;
var e = null;
var f = BigInt(999);
var g1 = Symbol("Hey Boi");

// Non Primitive
var arr = [25, "Shashwat"];
var obj = { name: "Shashwat", age: 22 };
function newOne(one, two) {
  return one * two;
}

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g1);

console.log(arr);
console.log(obj);
console.log(newOne(2, 3));

// Q3 Create variables and demonstrate all 4 types of operators.
var a = 20;
var b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(b % a); // Prints the first remainder that appears after performing division.

// Q4 Write a prog that checks if a number is positive, negative or zero.
var num = 5;
if (num > 0) {
  console.log(num + " is Positive");
} else if (num < 0) {
  console.log(num + " is Negative");
} else {
  console.log(num + " is Zero");
}

// Q5 Create switch block that logs the name of the month based on a number
var a = 12;
switch (a) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid number entered");
    break;
}

// Q6 Print even number from 1 to 20 using loop
var end = 20;
for (var i = 1; i <= end; i++) {
  if (i % 2 === 0) console.log(i);
}

// Final Q1: Write a JS code that declares 3 variables 'name', 'age' & 'isStudent'. Use comment to describe.

var Username = "Shashwat"; // used Username var to store string
var age = 22; // used age var to store number
var isStudent = true; // used isStudent var to store bool
console.log(
  Username + " is " + age + " years old. " + isStudent + " to be student."
);

// Final Q2: Declare variable of 5 different data type(String, Number, Bool, undefined, null) and log each using typeof.
var a = "Shashwat Naik";
var b = 22;
var c = false;
var d;
var e = null;
console.log(a + " is " + typeof a);
console.log(b + " is " + typeof b);
console.log(c + " is " + typeof c);
console.log(d + " is " + typeof d);
console.log(e + " is " + typeof e);

// Final Q3: Write a prog. to check if a number is even or odd. Use % and if condition
var num = 50;
if (num % 2 != 0) {
  console.log(`${num} is Odd.`);
} else {
  console.log(`${num} is Even.`);
}

// Final Q4: (i) Use switch to log the number based on day. (ii) for loop to print num
var day = "Sunday";
switch (day) {
  case "Monday":
    console.log(day + " is " + 1);
    break;
  case "Tuesday":
    console.log(day + " is " + 2);
    break;
  case "Wednesday":
    console.log(day + " is " + 3);
    break;
  case "Thursday":
    console.log(day + " is " + 4);
    break;
  case "Friday":
    console.log(day + " is " + 5);
    break;
  case "Saturday":
    console.log(day + " is " + 6);
    break;
  case "Sunday":
    console.log(day + " is " + 7);
    break;
  default:
    console.log("Invalid input. Check it!!");
    break;
}

// ii
var start = 1,
  last = 5;
for (var i = start; i <= last; i++) {
  console.log(i);
}
