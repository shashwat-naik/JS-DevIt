// Q6 Create an object and use Reflect to: a. Set a property role to "intern" b. Get the role value and log it to the console

let corporate = {
  name: "Shashwat",
  designation: "Fresher",
};
let put = Reflect.set(corporate, "role", "Intern");
let find = Reflect.get(corporate, "role");
console.log(find);

// Q7 Use Symbol as a key for a secret user id and prevent from being accidentally overwritten.

let secretId = Symbol("id");
let user = {
  name: "Shashwat",
  [secretId]: "123abc",
};

console.log("Accessing via symbol " + user[secretId]);
user["secretId"] ="123"

console.log("Original: " + user[secretId]);

// Q8 Browser obj interaction:
//  a) Display alert with current screen and height using screen.
//  b) Log browser's user agent using navigator.
//  c) Check display if browser is online.
//  d) Create a button that, when clicked, takes the user back to previous page using history.back().

window.alert("Alert using windows.alert");

console.log(navigator.userAgent);
console.log(navigator.onLine);

let back = document.getElementById("btn1");
back.addEventListener("click", function () {
  history.back();
});

// Q9 DOM Manipulation:
//   a) Add a heading (<h1>) element to the page with the text "Welcome, Intern!" using the document object.
//   b) Create a button that changes the text of this heading to "You clicked the button!" when clicked.
let txt = document.getElementById("display");
let press = document.getElementById("btn");

txt.textContent = "Welcome, Intern!";
press.addEventListener("click", function () {
  txt.innerHTML = "You clicked the Button!";
});
