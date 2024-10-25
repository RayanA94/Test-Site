let student = {
    name: "Marie",
    age: 20,
    courses: []
};

student.age = 21;

student.grade = "A";

student.courses.push("Math", "Physics", "Chemistry");

let indexPhysics = student.courses.indexOf("Physics");

let firstTwoCourses = student.courses.slice(0, 2);

console.log(student);
console.log("Index de Physics :", indexPhysics);
console.log("Nouveau tableau créé avec slice :", firstTwoCourses);