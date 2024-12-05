interface Admin {
    name: string;
    permission: string;
}

interface User{
    name: string;
    age: number;
}


type UserOrAdmin = User & Admin;

function greet(user:UserOrAdmin){
    console.log(user.name)
}