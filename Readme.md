JavaScript Assignment: The "Class Roster" Manager 

You are building a system to manage a class roster. Your script will: 

Take a list of student names (Array), which may contain duplicates. 

Use a Set to find all the unique students. 

Use a Map to assign a grade to each unique student. 

Create a function to look up a student's grade, which must use try...catch to handle cases where the student doesn't exist. 

Follow the steps below.  

Part 1: The Raw Data (Array) 

Create an Array called studentSubmissions. This represents all the students who submitted an assignment. It's okay to have duplicates. 

Part 2: The Unique Students (Set) 

Create a Set called uniqueStudents from the studentSubmissions array. 

Log uniqueStudents to the console to see the duplicates removed. 

Part 3: The Gradebook (Map) 

Now we'll store grades for each unique student. 

Create a new, empty Map called studentGrades. 

Add the following student/grade pairs to the map using map.set(): 

Alice: "A-" 

Bob: "C+" 

Charlie: "B" 

David: "A" 

Log the entire studentGrades map to see your data. 

Part 4: Grade Lookup (Functions & Error Handling) 

This is the most important part! We'll create a "risky" function that can fail. 

Create a function called getGrade(studentName). 

Inside the function: 

Use map.has() to check if studentGrades contains the studentName. 

If it does NOT have the student, throw a new Error with the message: "Error: Student '${studentName}' not found." 

If it DOES have the student, use map.get() to find their grade and return it. 

Create an Array called studentsToLookup containing these names: ["Alice", "Eve", "Bob", "Frank"]. 

Loop over the studentsToLookup array (a forEach loop is great for this). 

Inside the loop, wrap your code in a try...catch block: 

In the try block: Call your getGrade() function with the student's name and log the result (e.g., Alice's grade is: A-). 

In the catch (error) block: Log the error.message. 

/*=============================================== 
 * Expected Final Output: 
 * 
 * Unique Students: Set(4) { 'Alice', 'Bob', 'Charlie', 'David' } 
 * Gradebook: Map(4) { 'Alice' => 'A-', 'Bob' => 'C+', 'Charlie' => 'B', 'David' => 'A' } 
 * 
 * --- Grade Lookup Results --- 
 * Alice's grade is: A- 
 * Error: Student 'Eve' not found. 
 * Bob's grade is: C+ 
 * Error: Student 'Frank' not found. 
 */ 
 

 