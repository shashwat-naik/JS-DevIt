// Q1 Create a countdown timer that counts down from 10 to 0 in the console using setInterval(), and logs "Done!" when finished.
let counter = 10;

let Timer = setInterval(function () {
  if (counter == 0) {
    console.log("Done!");
    clearInterval(Timer);
  } else {
    console.log(counter);
    counter--;
  }
}, 0);

// Q2 Create a class Car with a static property totalCars and a const object inside a function.
class Car {
  static totalcars = 5;

  Wheel() {
    const wheel = {
      type: "Alloy",
      tyre: "Apollo",
      count: 4,
    };
    console.log(wheel);
  }
}
const myCar = new Car();
myCar.Wheel();
console.log("Total cars:", Car.totalcars);

//  Q4 Write a function parseCSV(str) that:
// Converts a comma-separated string to an array
// • Trims each item
// • Filters out empty strings
// • parseCSV(" , apple , banana, , cherry ")// ["apple", "banana", "cherry"]

function parseCSV(str) {
  return str
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item !== "");
}
console.log(parseCSV(" , apple , banana, , cherry"));

// Q5 Write a function checkKeyword(str, keyboard) that returns true if the keyword is found in the given str, case-insensitive. -checkKeyboard("Hello World","world");

function checkKeyword(str, keyboard) {
  return str.toLowerCase().includes(keyboard.toLowerCase());
}
console.log(checkKeyword("Hello World", "world"));
console.log(checkKeyword("JavaScript", "script"));
console.log(checkKeyword("Hi There", "bye"));

// Q6 Create a function getWeekNumber(date) that returns the ISO 8601 week number of a given date.- daysBetween("2025-07-01", "2025-07-23");

function getWeekNumber(date) {
  var d = new Date(date);

  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));

  let week1 = new Date(d.getFullYear(), 0, 4);
  let diff = d - week1;

  let weekNumber = 1 + Math.round(diff / (7 * 24 * 60 * 60 * 1000));
  return weekNumber;
}

console.log("No of days using ISO " + getWeekNumber("2025-07-17"));

// Q7 Create a function getWeekNumber(date) that returns the ISO 8601 week number of a given date.
// getWeekNumber(new Date("2025-01-01")); // Week 1
// getWeekNumber(new Date("2025-12-31")); // Week 1 or 53 depending

console.log(getWeekNumber(new Date("2025-01-01"))); 
console.log(getWeekNumber(new Date("2025-12-31")));

// Q8 Write a function daysBetween(date1, date2) that calculates and returns the number of full days between the two dates.
// daysBetween("2025-07-01", "2025-07-23"); // 22
function daysBetween(date1, date2) {
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  let diffTime = Math.abs(d2 - d1);
  let diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDay;
}
console.log(daysBetween("2025-07-01", "2025-07-23"));

// Q9 Write a function cleanNames(str) that takes a comma-separated string and returns an array of trimmed cleanNames(" John , Jane , Bob ") // ["John", "Jane", "Bob"]
function cleanNames(str) {
  return str.split(",").map((name) => name.trim());
}
console.log(cleanNames(" John , Jane , Bob "));
