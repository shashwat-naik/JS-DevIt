// Q1 Write a function that accepts an array of values(numbers, strings, etc). Returns an object with all unique values(using Set) and a frequency count of each value(using Map).

function acceptIntoArr(arr) {
  let uniqueVal = new Set(arr);
  let freq = new Map();

  for (let i = 0; i < arr.length; i++) {
    freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
  }
  return { uniqueVal, freq };
}
const result = acceptIntoArr(["apple", "banana", "apple", 1, 2, 1]);

console.log(result.uniqueVal);
console.log(result.freq);

// Q2 Create a function that parses a given date string. Calculates and returns days left from today with user friendly message.

function daysCalculate(date1,date2){
    let d1=new Date(date1);
    let d2=new Date(date2);

    let diffTime=Math.abs(d2-d1);
    let diffDay=Math.ceil(diffTime/(1000 * 60 * 60 * 24));
    return diffDay;
}
console.log(daysCalculate("2025-07-01", "2025-07-23"));


// Q3 Build a mini calculator that uses callbacks.

function calculator(num1, num2, opCallback) {
  return opCallback(num1, num2); // it changes to add(num1,num2); any other operator passed will form this format.
}
function add(num1, num2) {
  return num1 + num2;
}
function minus(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  if (num2 == 0) return "Infinity";
  return num1 / num2;
}
console.log(calculator(10, 20, add));
console.log(calculator(10, 20, minus));
console.log(calculator(10, 20, multiply));
console.log(calculator(10, 20, divide));

// Q4 Use WeakMap & WeakSet: Storing login metadata(timestamp, Role, etc) || Tracking which users have been processed (eg. logged in)

