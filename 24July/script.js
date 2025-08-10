
// Task 1 - Print 1 to 100 skipping 3 & 5, and mark multiples of both
function task1() {
  let output = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      if (i % 3 == 0 && i % 5 == 0) {
        output += `${i} <br>`;
      }
      continue; 
    }
    output += i + "<br>"; 
  }
  document.getElementById("task1-output").innerHTML = output;
}

// Task 2 - Hide/Show Paragraph
function toggleParagraph() {
  const para = document.getElementById("hiddenPara");
  const btn = document.getElementById("toggleBtn");
  if (para.style.display === "none") {
    para.style.display = "block";
    btn.innerText = "Hide Paragraph";
  } else {
    para.style.display = "none";
    btn.innerText = "Show Paragraph";
  }
}

// Task 3 - Password Eye Toggle
function togglePassword() {
  const pass = document.getElementById("passwordField");
  pass.type = pass.type === "password" ? "text" : "password";
}

// Task 4 - Dropdown populated from JSON
const dropdownData = ["Apple", "Banana", "Cherry"];
const dropdown = document.getElementById("jsonDropdown");
dropdownData.forEach(item => {
  const opt = document.createElement("option");
  opt.value = item;
  opt.text = item;
  dropdown.appendChild(opt);
});

// Task 5 - Multiple Inputs from JSON
const inputsData = {
  dropdown: ["Red", "Green", "Blue"],
  checkboxes: ["HTML", "CSS", "JS"],
  radios: ["Male", "Female"]
};
const container = document.getElementById("multiInputs");

// Dropdown
let select = document.createElement("select");
inputsData.dropdown.forEach(color => {
  let option = document.createElement("option");
  option.value = color;
  option.text = color;
  select.appendChild(option);
});
container.appendChild(select);

// Checkboxes
inputsData.checkboxes.forEach(skill => {
  let label = document.createElement("label");
  let cb = document.createElement("input");
  cb.type = "checkbox";
  cb.value = skill;
  label.appendChild(cb);
  label.appendChild(document.createTextNode(skill));
  container.appendChild(label);
});

// Radios
inputsData.radios.forEach(gender => {
  let label = document.createElement("label");
  let rb = document.createElement("input");
  rb.type = "radio";
  rb.name = "gender";
  rb.value = gender;
  label.appendChild(rb);
  label.appendChild(document.createTextNode(gender));
  container.appendChild(label);
});

// Task 6 - Disable/Enable Radio Button
function disableRadio() {
  document.getElementById("option2").disabled = true;
}

function enableRadio() {
  document.getElementById("option2").disabled = false;
}

function getRadioValue() {
  let radios = document.getElementsByName("choice");
  radios.forEach(r => { if (r.checked) alert(r.id); });
}

// Task 7 - Difference Between Two Arrays
function findDifference() {
  const arr1 = ["A", "B", "c"];
  const arr2 = ["b", "c", "D"];
  let diff = arr1.filter(item => !arr2.includes(item));
  document.getElementById("diffOutput").innerText = diff;
}

// Task 8 - Find Common Elements
function findIntersection() {
  const arr1 = [1,2,3,4];
  const arr2 = [3,4,5,6];
  const intersection = arr1.filter(num => arr2.includes(num));
  document.getElementById("intersectOutput").innerText = intersection;
}

// Task 9 - Find() Method Multiple Properties
function findProperty() {
  const users = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 }
  ];
  const found = users.find(u => u.name === "Alice" && u.age === 30);
  document.getElementById("findOutput").innerText = JSON.stringify(found);
}

// Task 10 - Debounce for Dropdown
let debounceTimer;
document.getElementById("searchBox").addEventListener("input", function(e) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    document.getElementById("debounceOutput").innerText = `Searching for: ${e.target.value}`;
  }, 500);
});

// Task 11 - window.print() html part

// Task 12 - Editable Table is set with contenteditable="true" in HTML

// Task 13 - Non-JS Editable handled with contenteditable="true" in HTML

// Task 14 & 15 - CanvasJS Placeholder (can be wired up when CanvasJS library added)
// Note: Add CanvasJS script CDN to use real charts.
