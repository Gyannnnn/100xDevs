"use strict";
const greet21 = (student) => {
    console.log("Hi " + student.firstName);
};
let student = {
    firstName: "Gyanranjan",
    lastname: "patra",
    age: 21
};
let teacher = {
    firstName: "Atul Vikash",
    lastname: "Lakra",
    age: 31
};
greet21(student);
greet21(teacher);
