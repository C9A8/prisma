import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function createUser(username:string, password:string, firstname?:string, lastname?:string,  ) {
  try {
    const user = await prisma.users.create({
      data: {
        // username: "tiger1@gamail.com",
        // firstname: "tiger",
        // lastname: "nhi hai",
        // password: "123456",

           username:  username,
           firstname: firstname,
           lastname:  lastname,
           password:  password,
      },
    });
    console.log("User created:");
    console.table(user);
  } catch (error) {
    console.error(`Failed to create user: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

//  createUser("random@gmail.com","123456");

async function updateUser(userId:number) {
    try {
        const upUser = await prisma.users.update({
            where : {id : userId},
            data  : {username : "ayush@gmail.com",firstname : "ayush", lastname : "p"}
    
        })
    } 

    catch(error){
        console.error(`failed to update users ${error}`)
    }

    finally{
        await prisma.$disconnect();
    }
    
}

// updateUser(3);

async function getUsers(id?:number) {
    try{  
        // Find specific users using findunique() 
        //const read = await prisma.users.findUnique({
        //  where : {id : id}
        //});
        const read = await prisma.users.findMany();
        console.table(read);
    }
    catch(error){
        console.error(`failed to get users ${error}`)
    }
    finally{
        await prisma.$disconnect
    }
    
}

getUsers(3);

async function deletedUser(id:number) {
    const deletedUser = await prisma.users.delete({
        where : {id : id}
    })

    console.log(deletedUser)
    
}

// deletedUser(3);