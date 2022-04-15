interface User {
    type: 'user' | 'admin';
    name: string;
    age: number;
    occupation: string;
}
const user : User = {
    type: 'admin',
    name : "Albert",
    age : 35,
    occupation : "teaching"
}

function getUserType(user : User) {
    const type  = user.type;
    console.log("User Type is : ",type);
}

getUserType(user);

