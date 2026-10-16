//Take a list of student names (Array), which may contain duplicates. 
let studentSubmissions = ['Alice', 'Bob', 'Charlie', 'Charlie', 'David', 'Alice']
console.log("The Original Array Elements" + studentSubmissions);
const uniqueStudents = new Set(studentSubmissions);
console.log("The Stu_List Set Elements:", uniqueStudents);
const studentGrades = new Map();
studentGrades.set("Alice", 'A+')
studentGrades.set("Bob", 'C+')
studentGrades.set("Charlie", 'B')
studentGrades.set("David", 'A')
console.log(studentGrades);


function getGrade(studentName) {

    if (!studentGrades.has(studentName)) {
        throw new Error(`Error: Student '${studentName}' not found.`)
    }
    return studentGrades.get(studentName);


}
const studentsToLookUp = ["Alice", "Eve", "Bob", "Frank"];
console.log("Students Grades");
studentsToLookUp.forEach((name) => {
    try {
        const grade = getGrade(name);
        console.log(`${name}'s grade is: ${grade}`);
    } catch (error) {
        console.log(error.message);
    }
});



