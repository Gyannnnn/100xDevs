// interface People {
//   name: string;
//   age: number;
//   greet?: () => void;
// }

// let prson: People = {
//   name: "Gyanranjan Patra",
//   age: 21,
//   greet: () => {
//     console.log("Hi");
//   },
// };

// class Manager implements People {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }


// let user = new Manager("Gyanranjan",90);

// console.log("Name :"+user.name+" Is "+user.age+" years old");




// class shape{
//   area(){
//     console.log("Area Is ...")
//   }
// }

// class Rectangle extends shape{
//   width: number;
//   height: number;
//   constructor(){
//     super()
//     this.height = 1;
//     this.width = 2;
//   }
// }

// let r = new Rectangle()
// r.area();



interface User{
  name: string;
  age: number;
  isLegal(): boolean;
}


class Manager implements User{
  name: string;
  age: number
  constructor(name: string, age: number){
    this.name  = name;
    this.age = age;
  }
  isLegal(): boolean {
    return this.age>18;
  }
}

const m = new Manager("Gyanranjan patra",90);

console.log(m.isLegal())

