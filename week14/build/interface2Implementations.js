"use strict";
// interface People {
//   name: string;
//   age: number;
//   greet?: () => void;
// }
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isLegal() {
        return this.age > 18;
    }
}
const m = new Manager("Gyanranjan patra", 90);
console.log(m.isLegal());
