// types let us to aggregate the data together


// interface User{
//     name: string;
//     age: number;
// }


// type User1 = {
//     name: string;
//     age: number ;
// }



// function isLegal(user: User1): boolean{
//     return user.age>18

// }



type employee = {
    name: string;
    startDate: string;   
};

type manager = {
    name: string;
    department: string
};

let e: employee = {
    name: "Harkrat",
    startDate: "12-23-12222"
}

let ma: manager = {
    name: "harkirat",
    department: "Electricity",
}

type TeamLead = employee & manager ;

let tld: TeamLead = {
    name: "Gyanaranjan Patra",
    startDate: "90-12-22222",
    department:"Chor",
    
}