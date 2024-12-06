interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type updatedUser = Pick<User, "email" | "password" | "name" | "age">; // pick

type updatedUserOptional = Partial<updatedUser>; // patial => make optional

function updateUser(updatedUser: updatedUserOptional) {
  name: "rp";
}

// typescript let us to change the internal values of array / object but not let us to change the refernce of the array or object

const user = {
  name: "Gyanranjan patra",
};

user.name = " Ujjwal Barik";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
//          arr = [1,2,3,4,5,6,7,8,]  ======> not letting us to change the reference !

// readonly

type user21 = {
  readonly Name: string;
  age: number;
};

const user1:user21 ={
    Name:"Gyanranjan Patra",
    age:21
}

 // user1.Name = "Ujjwal barik" ======> Not letting us to change the value !
 
 