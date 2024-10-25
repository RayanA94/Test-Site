// Créer l'objet student
let student = {
    name: "Marie",
    age: 20,
    courses: []
};

// Modifier l'âge
student.age = 21;

// Ajouter une nouvelle propriété grade
student.grade = "A";

// Travailler avec le tableau courses
student.courses.push("Math", "Physics", "Chemistry");

// Trouver l'index de "Physics"
let indexPhysics = student.courses.indexOf("Physics");

// Créer un nouveau tableau avec les deux premiers éléments de courses
let firstTwoCourses = student.courses.slice(0, 2);

// Afficher les résultats dans la console
console.log(student);
console.log("Index de Physics :", indexPhysics);
console.log("Nouveau tableau créé avec slice :", firstTwoCourses);