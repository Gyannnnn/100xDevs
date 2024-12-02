function greet2(user: { name: string; age: number }) {
  console.log("Hi " + user.name);
  console.log("Your Age Is " + user.age);
}


greet2({
    name: "GYanranjan",
    age: 90
})