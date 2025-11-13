// STUDENT GRADES MANAGER 
const students = [ {name: "Alice", score: 85}, 
                    {name: "Samuel", score: 45}, 
                    {name: "Emmanuel", score: 72},
                    {name: "Joy", score: 50},
                    {name: "Nathan", score: 56},
                    {name: "Glory", score: 33},
                ];

// map()
const studentNames = students.map(students => students.name);
console.log("Student Names:", studentNames);

// filter() 
const passedStudents = students.filter(students => students.score >= 50);
console.log("Students who passed:", passedStudents);

// reduce()
const totalScore = students.reduce((sum, students) => sum + students.score, 0);
const averageScore = totalScore / students.length;
console.log("Average Score:", averageScore);

// For loop
for (let i = 0; i < students.length; i++){
    console.log("Name: " + students[i].name + ", Score: " + students[i].score);
}

// if...else 
for (let i = 0; i < students.length; i++) {
let grade;
let score = students[i].score;

if (score >= 80) {
    grade = "A"
} else if (score >= 70) {
    grade = "B"
} else if (score >= 60) {
    grade = "C"
} else if (score >= 50) {
    grade = "D"
} else {
    grade = "F"
}
console.log("Name: " + students[i].name + ", Score: " + score + ", Grade: " + grade);}

