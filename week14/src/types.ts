interface human{
    name:string,
    age:number
}

interface student{
    regdNo:number,
    Branch:string
}

type employee = human & student;


let teacher1:employee = {
    name:"Atual",
    age:29,
    regdNo:2302080019,
    Branch:"Information Technology"

}

console.log(teacher1.name);