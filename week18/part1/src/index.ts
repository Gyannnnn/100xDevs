import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser() {
  await client.user.create({
    data: {
      username: "Gyanranjan Patra",
      password: "123  2",
      age: 21,
      city: "Delhi",
    },
  });
}

async function deleteaUser(){
    await client.user.delete({
        where:{
            id : 1
        }
    })
    console.log("deleted succsessfully")
}

async function updateUser(){
    await client.user.update({
        where:{
            id:2
        },
        data:{
            username:"Runa Patra"
        }
    })
    console.log("Updated Successfully");
}

async function findUser(){
    try {
        const user = await client.user.findFirst({
            where:{
                id:2
            },
            select:{
                username:true
            }
        });
        console.log(user) 
    } catch (error) {
        console.log(error)
    }
}

// deleteaUser();

// createUser();

// updateUser();

findUser();