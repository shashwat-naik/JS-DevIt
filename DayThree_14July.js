// Q1 Create an ArrayBuffer of 8 bytes and set first 4 bytes as a 32-bit integer value of 100. Then read and print it.
let buffer = new ArrayBuffer(8);
let view = new DataView(buffer);

view.setInt32(0, 100);
let value = view.getInt32(0);
console.log(value);

// Q2 Create 3 different types of events each with one example
const btn = document
  .getElementById("btnn")
  .addEventListener("mouseover", function () {
    console.log("Inside of the button");
  });
const btn1 = document
  .getElementById("btnn")
  .addEventListener("mouseout", function () {
    console.log("You got out of the button");
  });
const btn2 = document
  .getElementById("txt")
  .addEventListener("keypress", function () {
    console.log("Key pressed");
  });

// Q3 convert the following obj into JSON string and log it in the console: {name:'Shashwat', age: 22, isAdmin:true};
let info = { name: "Shashwat", age: 22, isAdmin: true };
let jsonStr = JSON.stringify(info);

console.log(jsonStr);

// Q4 Parse this JSON string back to JS obj
let productInput = '{"product":"Book", "price":99, "inStock":true}';
let jsParse = JSON.parse(productInput);

console.log(jsParse);

// Q5 Use Number.isInteger() to check whether the given value is an integer
let num = 23;
console.log(Number.isInteger(num));

// Q6 Write regular expression to check if a string contains only letter (no numbers or symbols)
function check(input) {
  let regex = /^[A-Z]+$/;
  return regex.test(input);
}
let inp1 = "SHASHWATNAIK";
let inp2 = "SHASHWAT NAIK";
let inp3 = "Shashwatnaik";
console.log(`${inp1} ` + check(inp1));
console.log(`${inp2} ` + check(inp2));
console.log(`${inp3} ` + check(inp3));

// Extra Question
// Q1 Odd even number without using if statement, for loop and inbuilt function
let n1 = 25;
console.log(n1 % 2 ? "odd" : "even"); // ternary operator is also a if else

// __________________________________________________________________________________

let number1 = 5; // have used bitwise operator
let result = ["Even", "Odd"][num % 2];
console.log(result);

// ____________________________________________________________________________________

let number2 = 15;
let evenodd = ["even", "odd"];
console.log(evenodd[number2 % 2]);

// Q2 From a given string find the frequency of each character inside of the string
function countFreq(name) {
  let duplicate = {};

  for (let i = 0; i < name.length; i++) {
    let keep = name[i];
    // space
    if (name[i] == " ") continue;
    // normal iteration
    else if (duplicate[keep]) {
      duplicate[keep]++;
    } else {
      duplicate[keep] = 1;
    }
  }
  return duplicate;
}

let ans = countFreq("shashwat naik");
console.log(ans);

// Q3 Email regexp
function emailId(input) {
  let regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regexp.test(input);
}
console.log(emailId("shashwat@gamil.com"));

// Phone number
function phno(input) {
  let regex = /^[0-9]{10,}$/;
  return regex.test(input);
}
console.log(phno());
