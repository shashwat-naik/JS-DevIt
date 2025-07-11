// Q1 Declare an object representing a student
let student = {
  FirstName: "Shashwat",
  LastName: "Naik",
  Age: 22,
  isStudent: true,
};
console.log(`${student.FirstName} ${student.LastName} is ${student.Age} age.`);

// Q2 Add an array of subject
let arr = ["Math", "English", "Hindi"];
arr.push("Gujarati");
console.log(arr);

// Q3 Include a method that retrun
let student1 = {
  FirstName: "Shashwat",
  LastName: "Naik",

  fullName: function () {
    return this.FirstName + " " + this.LastName;
  },
};

console.log(student1.fullName());

// Q4 Use a boolean to check if the student is active
let student2 = {  
  active:true,
  Fname: "Shashwat",
  toggleStatus: function(){
    return this.active==true ? `${this.Fname} is active` : `${this.Fname} is active`;
  }
};
console.log(student2.toggleStatus());

// Q5 Display current date and random number
console.log(Math.floor(Math.random()*100));
let date = new Date();
console.log(date.getDate());
