let score = 29;
let grade;

switch (true) {
  case score >= 70:
    grade = "A";
    break;
  case score >= 60:
    grade = "B";
    break;
  case score >= 50:
    grade = "C";
    break;
  case score >= 40:
    grade = "D";
    break;
  case score >= 30:
    grade = "E";
    break;
  default:
    grade = "F"
    // break;
};

if(grade === "F" ){
    console.log("You are a Failure");
}
console.log(`Your grade is ${grade}`);

