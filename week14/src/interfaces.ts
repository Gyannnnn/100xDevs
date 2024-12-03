interface user{
  firstName:string,
  lastname:string,
  age:number
}

const greet21 =(student:user):void=>{
  console.log("Hi "+student.firstName);

}


let student:user = {
  firstName:"Gyanranjan",
  lastname:"patra",
  age:21

}
let teacher:user = {
  firstName:"Atul Vikash",
  lastname:"Lakra",
  age:31
}
greet21(student);
greet21(teacher);
