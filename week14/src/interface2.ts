interface People {
  name: string;
  age: number;
  greet: () => void;
}

let person: People = {
  name: "Gyanaranjan Patra",
  age: 21,
  greet: () => {
    console.log("Hello");
  },
};


person.greet();
