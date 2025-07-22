// Q1 Safe JSON Calculator [exception handling, eval, promises, strict mode, debugging]

"use strict";

function handleSubmit(e) {
  e.preventDefault();
  let expression_for_calculate = document.getElementById(
    "expression_for_calculate"
  );
  let Answer = document.getElementById("Answer");
  let expression_for_calculate_val = expression_for_calculate.value;

  let ansOfExpression = eval(expression_for_calculate_val);

  Answer.value = ansOfExpression;
}

//exception handaling
function handleCalculate() {
  let regex = /^[-+]?[0-9]{0,}([-+*/]?)[0-9]+$/;
  let expression_for_calculate = document.getElementById(
    "expression_for_calculate"
  );
  let expression_for_calculate_val = expression_for_calculate.value;
  let inputFeedback = document.getElementById("inputFeedback");
  expression_for_calculate.style.border = "";

  try {
    if (regex.test(expression_for_calculate_val)) {
      expression_for_calculate.style.border = "5px solid green";
      inputFeedback.classList = "text-success fw-bold";
    } else {
      throw new Error(`invalid input for calculation`);
    }
  } catch (error) {
    expression_for_calculate.style.border = "5px solid red";
    inputFeedback.classList = "text-danger fw-bold";
    inputFeedback.innerText = error.message;
  }
}
// Q2 Delayed task with promises and timeout [promises, Async/await, date comparison, debugging]

("use strict");

function delayTask(ms) {
  return new Promise((resolve, reject) => {
    if (ms <= 0) {
      reject("Invalid delay time. Delay must be positive.");
    }

    setTimeout(() => {
      resolve("Delay completed successfully.");
    }, ms);
  });
}

async function runTask(startTime, endTime) {
  try {
    const now = new Date();
    console.log("Current Time:", now);

    if (now >= startTime && now <= endTime) {
      console.log("Waiting 3 seconds before running the task...");

      const message = await delayTask(3000);
      console.log(message);
      console.log("Task executed after delay.");
    } else {
      console.log("Task not allowed at this time.");
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

let start = new Date();
let end = new Date(start.getTime() + 60 * 1000);

runTask(start, end);

// Q3 Event delegation with closest(). [event handling, closest, this, alert]

let element = document.getElementById("FocusElem");
let closest = element.closest("#container");
if (closest) {
  closest.style.border = "4px solid black";
}

// Q4 Hoisting scenario [Hoisting, var/let, strict mode]

("use strict");
console.log(a);
// console.log(b);
// As variable b is initialized with let so its not a global variable and thus shows an error.

var a = 10;
console.log(a);
let b = 20;
// console.log(b);

// Q5 Mini form project [exception handling, promises, date comparison, this, alert, eval,closest, debugging]
